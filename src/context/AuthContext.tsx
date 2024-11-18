'use client';

import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { app } from 'firebase/config';
import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader.component';

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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, userData => {
            setUser(userData);

            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Loader /> : children}
        </AuthContext.Provider>
    );
};
