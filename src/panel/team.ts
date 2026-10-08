import { initializeApp } from '@firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User } from '@firebase/auth';
import { firebaseConfig } from '../lib/firebaseConfig';

/**
 * Team sign-in for the content panel. People sign in with their Google account; the server
 * checks the signed token and looks the address up in its team list, so the role shown here is
 * only a convenience and every permission is decided again on the server.
 */

export interface PanelConfig {
  roles: Record<string, string>;
  proposals: boolean;
  baseBranch: string;
}

export interface Member {
  email: string;
  role: 'admin' | 'editor' | 'teacher' | 'translator' | 'viewer';
  label: string;
  approve: boolean;
}

export interface Proposal {
  number: number;
  title: string;
  url: string;
  branch: string;
  createdAt: string;
  body: string;
}

const auth = getAuth(initializeApp(firebaseConfig, 'panel'));

export const watchUser = (callback: (user: User | null) => void) => onAuthStateChanged(auth, callback);
export const signIn = () => signInWithPopup(auth, new GoogleAuthProvider());
export const signOutOfPanel = () => signOut(auth);

/** Fetches with the signed-in person's token, when there is one. */
export const teamFetch = async (url: string, init: RequestInit = {}) => {
  const token = await auth.currentUser?.getIdToken();
  const headers = new Headers(init.headers);
  if (token) headers.set('Authorization', `Bearer ${token}`);
  if (init.body) headers.set('Content-Type', 'application/json');
  return fetch(url, { ...init, headers });
};

const readJson = async <T>(response: Response): Promise<T> => {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error((data as { error?: string }).error ?? `the server answered ${response.status}`);
  return data as T;
};

/** The team settings, or null when the panel runs without a team list (preview link only). */
export const loadConfig = async (): Promise<PanelConfig | null> => {
  const response = await fetch('/panel-api/config');
  return response.ok ? ((await response.json()) as PanelConfig) : null;
};

export const loadMember = async () => readJson<Member>(await teamFetch('/panel-api/me'));
export const loadProposals = async () => (await readJson<{ proposals: Proposal[] }>(await teamFetch('/panel-api/proposals'))).proposals;
export const sendProposal = async (edition: string, file: unknown, note: string) =>
  readJson<{ number: number; url: string }>(
    await teamFetch('/panel-api/proposals', { method: 'POST', body: JSON.stringify({ edition, file, note }) }),
  );
export const decideProposal = async (number: number, approve: boolean) =>
  readJson<{ number: number; url: string }>(
    await teamFetch(`/panel-api/proposals/${number}/${approve ? 'approve' : 'reject'}`, { method: 'POST' }),
  );

/** Mirrors the server's rule: translators change translations, viewers change nothing. */
export const mayEdit = (member: Member | null, language: string) => {
  if (!member) return true;
  if (member.role === 'viewer') return false;
  if (member.role === 'translator') return language !== 'en';
  return true;
};
