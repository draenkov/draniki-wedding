'use client';

import React, { FC, useEffect, useState } from 'react';
import styles from 'app/admin/admin.module.scss';
import { fontPrimary } from 'styles/fonts';
import Button from 'components/Button/Button.component';
import { useRouter } from 'next/navigation';
import { useAuthContext } from 'context/AuthContext';
import Loader from 'components/Loader/Loader.component';
import { signOut } from 'api/auth';
import { getGuestResponses, getGuests, removeGuest, setGuest } from 'api/admin';
import TextInput from 'components/Form/Controls/TextInput/TextInput.component';
import { useForm } from 'react-hook-form';
import PositiveIcon from 'assets/svg/positive.svg';
import NegativeIcon from 'assets/svg/negative.svg';
import Image from 'next/image';
import { FormValues } from 'components/Confirmation/Confirmation.component';

export interface GuestFormValues {
    name: string;
}

const defaultValues: GuestFormValues = {
    name: '',
};

const Admin: FC = () => {
    const { user } = useAuthContext();
    const router = useRouter();
    const [guests, setGuests] = useState<string[] | null>(null);
    const [guestResponses, setGuestResponses] = useState<Record<string, FormValues> | null>(null);

    const { handleSubmit, control, reset } = useForm<GuestFormValues>({
        mode: 'onBlur',
        defaultValues,
    });

    const handleGetGuests = async () => {
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

    const handleSetGuest = async ({ name }: GuestFormValues): Promise<void> => {
        await setGuest(name);

        await handleGetGuests();
        reset();
    };

    const handleRemoveGuest = async ({ name }: GuestFormValues): Promise<void> => {
        await removeGuest(name);

        await handleGetGuests();
        reset();
    };

    const handleGetResponses = async () => {
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
            handleGetResponses();
            handleGetGuests();
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
                    <form className={styles.guests}>
                        <div className={styles.btnWrap}>
                            <Button text="Выйти" onClick={handleSignOut} />
                        </div>
                        <div className={styles.line} />
                        <div className={styles.guestList}>
                            {guests?.map((guest, index) => (
                                <div className={styles.guestListItem} key={guest}>
                                    <p key={guest}>
                                        {index + 1} {guest}
                                    </p>

                                    {guestResponses?.[guest]?.confirmation === 'positive' && (
                                        <Image src={PositiveIcon as string} alt="positive" />
                                    )}

                                    {guestResponses?.[guest]?.confirmation === 'negative' && (
                                        <Image src={NegativeIcon as string} alt="negative" />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className={styles.line} />
                        <TextInput<GuestFormValues> control={control} name="name" />
                        <div className={styles.guestActions}>
                            <Button text="Добавить" onClick={handleSubmit(handleSetGuest)} />
                            <Button text="Удалить" onClick={handleSubmit(handleRemoveGuest)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;
