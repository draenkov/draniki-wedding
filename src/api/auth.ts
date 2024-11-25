import type { UserCredential } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { signOut as handleSignOut } from '@firebase/auth';
import { app } from 'firebase/config';

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
