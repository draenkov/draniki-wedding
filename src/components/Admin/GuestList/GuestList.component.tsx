import React, { FC, useState } from 'react';
import styles from 'components/Admin/GuestList/GuestList.module.scss';
import Image from 'next/image';
import PositiveIcon from 'assets/svg/positive.svg';
import NegativeIcon from 'assets/svg/negative.svg';
import TextInput from 'components/Form/Controls/TextInput/TextInput.component';
import Button from 'components/Button/Button.component';
import { useForm } from 'react-hook-form';
import { GuestFormValues, GuestListProps } from 'components/Admin/GuestList/GuestList.types';
import { removeGuest, removeGuestResponse, setGuest } from 'api/admin';
import { fontPrimary } from 'styles/fonts';
import GuestInfoModal from 'components/Admin/GuestList/GuestInfoModal/GuestInfoModal.component';
import { GuestResponse } from 'components/Main/Confirmation/Confirmation.types';

const defaultValues: GuestFormValues = {
    name: '',
};

const GuestList: FC<GuestListProps> = ({ guests, guestResponses, handleGetGuests }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentGuestInfo, setCurrentGuestInfo] = useState<GuestResponse | null>(null);

    const { handleSubmit, control, reset } = useForm<GuestFormValues>({
        mode: 'onBlur',
        defaultValues,
    });

    const onSubmit = async ({ name }: GuestFormValues, shouldRemove: boolean): Promise<void> => {
        if (name) {
            if (shouldRemove) {
                await removeGuest(name);
                await removeGuestResponse(name);
            } else {
                await setGuest(name);
            }

            await handleGetGuests();
            reset();
        }
    };

    if (!guests || !guestResponses) {
        return null;
    }

    return (
        <form className={styles.guests} onSubmit={handleSubmit(values => onSubmit(values, false))}>
            <div className={styles.guestList}>
                <div className={styles.guestListColumn}>
                    {guests?.slice(0, Math.ceil(guests?.length / 2))?.map(guest => (
                        <div className={styles.guestListItem} key={guest}>
                            <button
                                className={`${styles.guestBtn} ${fontPrimary.className}`}
                                key={guest}
                                onClick={() => {
                                    setCurrentGuestInfo(guestResponses?.[guest] || null);
                                    setIsModalOpen(true);
                                }}
                            >
                                {guests?.findIndex(originalGuest => originalGuest === guest) + 1}{' '}
                                {guest}
                            </button>

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
                            <button
                                className={`${styles.guestBtn} ${fontPrimary.className}`}
                                key={guest}
                                onClick={() => {
                                    setCurrentGuestInfo(guestResponses?.[guest] || null);
                                    setIsModalOpen(true);
                                }}
                            >
                                {guests?.findIndex(originalGuest => originalGuest === guest) + 1}{' '}
                                {guest}
                            </button>

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

            <TextInput<GuestFormValues> control={control} name="name" />

            <div className={styles.guestActions}>
                <Button text="Добавить" type="submit" />
                <Button text="Удалить" onClick={handleSubmit(values => onSubmit(values, true))} />
            </div>

            <GuestInfoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                guestInfo={currentGuestInfo}
            />
        </form>
    );
};

export default GuestList;
