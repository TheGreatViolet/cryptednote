import { Auth, createUserWithEmailAndPassword, getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { initApp } from './app';

export async function createClient(): Promise<Auth> {
  const app = await initApp();

  return getAuth(app);
}

export async function signUp(email: string, password: string): Promise<void> {
  const auth = await createClient();

  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    window.localStorage.setItem('email', email);
  }).catch(error => {
    Promise.reject(`There was an error creating the user: ${error}`);
  });
}