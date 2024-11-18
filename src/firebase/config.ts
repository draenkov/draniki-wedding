import { FirebaseError, initializeApp } from '@firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    UserCredential,
    signOut as handleSignOut,
} from '@firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
    authDomain: 'wedding-invitation-4f0ab.firebaseapp.com',
    projectId: 'wedding-invitation-4f0ab',
    storageBucket: 'wedding-invitation-4f0ab.firebasestorage.app',
    messagingSenderId: '807098626905',
    appId: '1:807098626905:web:0a42368d531556cf725248',
};

export const app = initializeApp(firebaseConfig);

interface SignInResult {
    result: UserCredential | null;
    error: FirebaseError;
}

export const signIn = async (email: string, password: string): Promise<SignInResult> => {
    const auth = getAuth(app);

    let result: UserCredential;
    let error: FirebaseError;

    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
};

export const signOut = async (): Promise<FirebaseError> => {
    const auth = getAuth(app);

    let error: FirebaseError;

    try {
        await handleSignOut(auth);
    } catch (e) {
        error = e;
    }

    return error;
};
