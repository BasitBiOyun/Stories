import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  projectId: "gen-lang-client-0373200489",
  appId: "1:603844754803:web:e9584b83ee6afcc1c25906",
  apiKey: "AIzaSyDmavhrByoyP86t9FpR1oiDtHwl5jDSXwM",
  authDomain: "gen-lang-client-0373200489.firebaseapp.com",
  storageBucket: "gen-lang-client-0373200489.firebasestorage.app",
  messagingSenderId: "603844754803"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
