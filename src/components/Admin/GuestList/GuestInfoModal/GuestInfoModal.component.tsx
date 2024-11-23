import React, { FC } from 'react';
import Modal from 'components/Modal/Modal.component';
import { GuestInfoModalProps } from 'components/Admin/GuestList/GuestInfoModal/GuestInfoModal.types';
import styles from 'components/Admin/GuestList/GuestInfoModal/GuestInfoModal.module.scss';
import PositiveIcon from 'assets/svg/positive.svg';
import NegativeIcon from 'assets/svg/negative.svg';
import Image from 'next/image';

const order = [
    { title: 'Подтверждение', value: 'confirmation' },
    { title: 'Виски', value: 'whiskey' },
    { title: 'Водка', value: 'vodka' },
    { title: 'Вино', value: 'wine' },
    { title: 'Шампанское', value: 'champagne' },
    { title: 'Что-нибудь безалкогольное', value: 'nonAlco' },
    { title: 'Убрать мясо', value: 'removeMeat' },
    { title: 'Аллергия', value: 'isAllergy' },
];

const GuestInfoModal: FC<GuestInfoModalProps> = ({ isOpen, onClose, guestInfo }) => (
    <Modal isOpen={isOpen} onClose={onClose} title={guestInfo?.name || 'Нет информации'}>
        <div className={styles.body}>
            {guestInfo ? (
                <>
                    {order.map(({ title, value }) => {
                        const key =
                            value === 'confirmation'
                                ? guestInfo[value] === 'positive'
                                : guestInfo[value];

                        return (
                            <div className={styles.field} key={value}>
                                <p>{title}</p>
                                <Image
                                    src={key ? (PositiveIcon as string) : (NegativeIcon as string)}
                                    alt="icon"
                                />
                            </div>
                        );
                    })}

                    {guestInfo?.allergyType && (
                        <div className={styles.field}>
                            <p>{guestInfo.allergyType}</p>
                        </div>
                    )}
                </>
            ) : (
                <p>Гость еще не дал ответ</p>
            )}
        </div>
    </Modal>
);

export default GuestInfoModal;
