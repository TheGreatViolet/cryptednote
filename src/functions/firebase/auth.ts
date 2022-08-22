import type { FirebaseError } from 'firebase/app';
import { Auth, createUserWithEmailAndPassword, getAuth, sendSignInLinkToEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { initApp } from './app';

export async function createClient(): Promise<Auth> {
  const app = await initApp();

  return getAuth(app);
}

export enum AuthErrorCode {
  INVALID_EMAIL = 'auth/invalid-email',
  USER_NOT_FOUND = 'auth/user-not-found',
  WRONG_PASSWORD = 'auth/wrong-password',
  EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
  WEAK_PASSWORD = 'auth/weak-password',
}

export async function signUp(email: string, password: string, callback: (res: string) => void): Promise<void> {
  const auth = await createClient();

  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    window.localStorage.setItem('email', email);

    callback('success');
  }).catch((error: FirebaseError) => {
    callback(error.code);
  });
}

export async function signIn(email: string, password: string, callback: (res: string) => void): Promise<void> {
  const auth = await createClient();

  signInWithEmailAndPassword(auth, email, password).then(() => {
    if (window.localStorage.getItem('email') !== email) {
      window.localStorage.setItem('email', email);
    }

    callback('success');
  }).catch((error: FirebaseError) => {
    callback(error.code);
    return;
  });
}