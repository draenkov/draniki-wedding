'use client';

import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from 'firebase/config';
import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextProviderProps {
    children: ReactNode;
}

const auth = getAuth(app);
export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, userData => {
            if (userData) {
                setUser(userData);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
