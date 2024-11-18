'use client';

import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { app } from 'firebase/config';
import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextProviderProps {
    children: ReactNode;
}

interface AuthContext {
    user: User | null;
}

const auth = getAuth(app);
export const AuthContext = createContext<AuthContext>({ user: null });

export const useAuthContext = (): AuthContext => useContext(AuthContext);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, userData => {
            setUser(userData);
        });

        return () => unsubscribe();
    }, []);

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
