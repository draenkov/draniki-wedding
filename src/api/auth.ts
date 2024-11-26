import type { UserCredential } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut as handleSignOut } from 'firebase/auth';
import { app } from 'firebase/config';

interface SignInResult {
    result: UserCredential | null;
    error: FirebaseError | null;
}

export const signIn = async (email: string, password: string): Promise<SignInResult> => {
    const auth = getAuth(app);

    let result: UserCredential | null = null;
    let error: FirebaseError | null = null;

    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e as FirebaseError;
    }

    return { result, error };
};

export const signOut = async (): Promise<FirebaseError | null> => {
    const auth = getAuth(app);

    let error: FirebaseError | null = null;

    try {
        await handleSignOut(auth);
    } catch (e) {
        error = e as FirebaseError;
    }

    return error;
};
