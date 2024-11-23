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

    const onSubmit = async ({ name }: GuestFormValues, shouldRemove: boolean): Promise<void> => {
        if (name) {
            await (shouldRemove ? removeGuest : setGuest)(name);

            await handleGetGuests();
            reset();
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
                    <form
                        className={styles.guests}
                        onSubmit={handleSubmit(values => onSubmit(values, false))}
                    >
                        <div className={styles.btnWrap}>
                            <Button text="Выйти" onClick={handleSignOut} />
                        </div>
                        <div className={styles.line} />
                        <div className={styles.guestList}>
                            <div className={styles.guestListColumn}>
                                {guests?.slice(0, Math.ceil(guests?.length / 2))?.map(guest => (
                                    <div className={styles.guestListItem} key={guest}>
                                        <p key={guest}>
                                            {guests?.findIndex(
                                                originalGuest => originalGuest === guest,
                                            ) + 1}{' '}
                                            {guest}
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
                            <div className={styles.guestListColumn}>
                                {guests?.slice(Math.ceil(guests?.length / 2))?.map(guest => (
                                    <div className={styles.guestListItem} key={guest}>
                                        <p key={guest}>
                                            {guests?.findIndex(
                                                originalGuest => originalGuest === guest,
                                            ) + 1}{' '}
                                            {guest}
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
                        </div>
                        <div className={styles.line} />
                        <TextInput<GuestFormValues> control={control} name="name" />
                        <div className={styles.guestActions}>
                            <Button text="Добавить" type="submit" />
                            <Button
                                text="Удалить"
                                onClick={handleSubmit(values => onSubmit(values, true))}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;
