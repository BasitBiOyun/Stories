import { GoogleAuth } from 'google-auth-library';
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  const credentialsPath = path.join(process.cwd(), 'google-credentials.json');
  if (!fs.existsSync(credentialsPath)) {
    console.error('google-credentials.json not found!');
    return;
  }

  const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
  const projectId = credentials.project_id;
  const region = 'us-west1';
  const serviceName = 'stories-of-the-prophets-prophet-adam';

  console.log(`Authenticating with Service Account for Project: ${projectId}`);
  const auth = new GoogleAuth({
    keyFilename: credentialsPath,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  const client = await auth.getClient();

  const getIamPolicyUrl = `https://${region}-run.googleapis.com/v1/projects/${projectId}/locations/${region}/services/${serviceName}:getIamPolicy`;
  const setIamPolicyUrl = `https://${region}-run.googleapis.com/v1/projects/${projectId}/locations/${region}/services/${serviceName}:setIamPolicy`;

  try {
    console.log(`Fetching IAM policy for service "${serviceName}" in ${region}...`);
    const getRes = await client.request({
      url: getIamPolicyUrl,
      method: 'POST',
    });

    const policy: any = getRes.data;
    console.log('Current IAM Policy:', JSON.stringify(policy, null, 2));

    if (!policy.bindings) {
      console.log('No bindings found. Service is already private or has no public access bindings.');
      return;
    }

    // Filter out 'allUsers' from any run.invoker bindings
    let modified = false;
    const newBindings = policy.bindings.map((binding: any) => {
      if (binding.role === 'roles/run.invoker') {
        const initialCount = binding.members.length;
        binding.members = binding.members.filter((member: string) => member !== 'allUsers');
        if (binding.members.length !== initialCount) {
          modified = true;
          console.log(`Removed allUsers from roles/run.invoker binding.`);
        }
      }
      return binding;
    }).filter((binding: any) => binding.members && binding.members.length > 0);

    if (!modified) {
      console.log('Public access (allUsers) was not found in any bindings. Service is already private!');
      return;
    }

    policy.bindings = newBindings;

    console.log('Updating IAM Policy with modified bindings...');
    const setRes = await client.request({
      url: setIamPolicyUrl,
      method: 'POST',
      data: { policy },
    });

    console.log('Successfully updated IAM Policy. Response:', JSON.stringify(setRes.data, null, 2));
    console.log('Public access has been completely disabled!');
  } catch (error: any) {
    console.error('Error modifying IAM policy:', error?.message || error);
    if (error?.response?.data) {
      console.error('API Error Details:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

main();
