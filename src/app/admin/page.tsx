'use client';

import React, { FC, useEffect } from 'react';
import styles from 'app/admin/admin.module.scss';
import { fontPrimary } from 'styles/fonts';
import Button from 'components/Button/Button.component';
import { signOut } from 'firebase/config';
import { useRouter } from 'next/navigation';
import { useAuthContext } from 'context/AuthContext';
import Loader from 'components/Loader/Loader.component';

const Admin: FC = () => {
    const { user } = useAuthContext();
    const router = useRouter();

    // TODO: вызывается 2 раза, мб просто положить в local storage?
    useEffect(() => {
        if (!user) {
            router.replace('/login');
        }
    }, [user, router]);

    const handleSignOut = async (): Promise<void> => {
        const error = await signOut();

        if (!error) {
            router.replace('/');
        }
    };

    if (!user) {
        return <Loader />;
    }

    return (
        <div className={`${styles.wrap} ${fontPrimary.className}`}>
            <div className={styles.container}>
                test
                <Button text="Выйти" onClick={handleSignOut} />
            </div>
        </div>
    );
};

export default Admin;
