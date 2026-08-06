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

  console.log(`Authenticating with Service Account for Project: ${projectId}`);
  const auth = new GoogleAuth({
    keyFilename: credentialsPath,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  const client = await auth.getClient();

  // Try both Knative and Cloud Run v1 API
  const urls = [
    `https://${region}-run.googleapis.com/apis/serving.knative.dev/v1/namespaces/${projectId}/services`,
    `https://run.googleapis.com/v1/projects/${projectId}/locations/${region}/services`
  ];

  for (const url of urls) {
    console.log(`\nQuerying URL: ${url}`);
    try {
      const res = await client.request({ url, method: 'GET' });
      console.log('Success! Response data:');
      console.log(JSON.stringify(res.data, null, 2));
    } catch (error: any) {
      console.error(`Failed: ${error?.message || error}`);
      if (error?.response?.data) {
        console.error('Details:', JSON.stringify(error.response.data, null, 2));
      }
    }
  }
}

main();
