'use client';

import React, { FC, useEffect, useState } from 'react';
import styles from 'app/admin/admin.module.scss';
import { fontPrimary } from 'styles/fonts';
import Button from 'components/Button/Button.component';
import { useRouter } from 'next/navigation';
import { useAuthContext } from 'context/AuthContext';
import Loader from 'components/Loader/Loader.component';
import { signOut } from 'api/auth';
import { getGuestResponses, getGuests } from 'api/admin';
import Widgets from 'components/Admin/Widgets/Widgets.component';
import GuestList from 'components/Admin/GuestList/GuestList.component';
import { GuestResponse } from 'components/Confirmation/Confirmation.types';
import DrinksSummary from 'components/Admin/DrinksSummary/DrinksSummary.component';
import VegansSummary from 'components/Admin/VegansSummary/VegansSummary.component';
import AllergySummary from 'components/Admin/AllergySummary/AllergySummary.component';

const Admin: FC = () => {
    const { user } = useAuthContext();
    const router = useRouter();
    const [guests, setGuests] = useState<string[] | null>(null);
    const [guestResponses, setGuestResponses] = useState<Record<string, GuestResponse> | null>(
        null,
    );

    const handleGetGuests = async (): Promise<void> => {
        const res = await getGuests();
        if (res) {
            const sortedRes = Object.values(res).sort((a, b) => {
                if (a.split(' ').at(-1) < b.split(' ').at(-1)) {
                    return -1;
                }
                if (a.split(' ').at(-1) > b.split(' ').at(-1)) {
                    return 1;
                }
                return 0;
            });
            setGuests(sortedRes);
        }
    };

    const handleGetResponses = async (): Promise<void> => {
        if (user) {
            const res = await getGuestResponses();

            if (res) {
                setGuestResponses(res);
            }
        }
    };

    useEffect(() => {
        if (!user) {
            router.replace('/login');
        } else {
            void handleGetResponses();
            void handleGetGuests();
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
                <div className={styles.admin}>
                    <div className={styles.btnWrap}>
                        <Button text="Выйти" onClick={handleSignOut} />
                    </div>
                    <Widgets guests={guests} guestResponses={guestResponses} />
                    <div className={styles.line} />
                    <GuestList
                        guests={guests}
                        guestResponses={guestResponses}
                        handleGetGuests={handleGetGuests}
                    />
                    <div className={styles.line} />
                    <DrinksSummary guests={guests} guestResponses={guestResponses} />
                    <div className={styles.line} />
                    <VegansSummary guestResponses={guestResponses} />
                    <div className={styles.line} />
                    <AllergySummary guestResponses={guestResponses} />
                </div>
            </div>
        </div>
    );
};

export default Admin;
