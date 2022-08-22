import fbconf from '../../../firebase.json';
import { initializeApp } from 'firebase/app';

export async function initApp() {
  const app = initializeApp(fbconf);

  return app;
}