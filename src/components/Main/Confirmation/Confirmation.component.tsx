'use client';

import React, { FC, useEffect, useState } from 'react';
import styles from 'components/Main/Confirmation/Confirmation.module.scss';
import { useForm } from 'react-hook-form';
import TextInput from 'components/Form/Controls/TextInput/TextInput.component';
import RadioInput from 'components/Form/Controls/RadioInput/RadioInput.component';
import Checkbox from 'components/Form/Controls/Checkbox/Checkbox.component';
import Button from 'components/Button/Button.component';
import { schema } from 'components/Main/Confirmation/Confirmation.config';
import { yupResolver } from '@hookform/resolvers/yup';
import { getGuests, setGuestResponse } from 'api/admin';
import { GuestResponse } from 'components/Main/Confirmation/Confirmation.types';

const defaultValues: GuestResponse = {
    name: '',
    confirmation: 'positive',
    whiskey: false,
    vodka: false,
    wine: false,
    champagne: false,
    nonAlco: false,
    isAllergy: false,
    allergyType: '',
    removeMeat: false,
};

const confirmationOptions = [
    {
        label: 'Я приду',
        value: 'positive',
    },
    {
        label: 'Я не приду',
        value: 'negative',
    },
];

const Confirmation: FC = () => {
    const [guests, setGuests] = useState<Record<string, string> | null>(null);
    const { handleSubmit, control, watch } = useForm<GuestResponse>({
        mode: 'onBlur',
        defaultValues,
        resolver: yupResolver(schema),
        context: guests,
    });

    const handleGetGuests = async (): Promise<void> => {
        const res = await getGuests();
        if (res) {
            setGuests(res);
        }
    };

    useEffect(() => {
        if (!guests) {
            void handleGetGuests();
        }
    }, [guests]);

    const isAllergy = watch().isAllergy;
    const isNegative = watch().confirmation === 'negative';

    const onSubmit = async (values: GuestResponse): Promise<void> => {
        await setGuestResponse(values);
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <div className={styles.confirmation}>
                    <div className={styles.titleWrap}>
                        <h3 className={styles.title}>
                            Пожалуйста, подтвердите свое присутствие на празднике
                        </h3>
                        <p>Ваши ответы очень помогут нам при организации свадьбы</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <TextInput<GuestResponse>
                            name="name"
                            control={control}
                            label="Имя и Фамилия"
                            placeholder="Имя Фамилия"
                            maxLength={40}
                        />

                        <RadioInput<GuestResponse>
                            name="confirmation"
                            control={control}
                            label="Подтвердите присутствие"
                            options={confirmationOptions}
                        />

                        {!isNegative && (
                            <>
                                <div className={styles.group}>
                                    <p>Предпочтения по напиткам</p>

                                    <Checkbox<GuestResponse>
                                        name="whiskey"
                                        control={control}
                                        label="Виски"
                                    />
                                    <Checkbox<GuestResponse>
                                        name="vodka"
                                        control={control}
                                        label="Водка"
                                    />
                                    <Checkbox<GuestResponse>
                                        name="wine"
                                        control={control}
                                        label="Вино"
                                    />
                                    <Checkbox<GuestResponse>
                                        name="champagne"
                                        control={control}
                                        label="Шампанское"
                                    />
                                    <Checkbox<GuestResponse>
                                        name="nonAlco"
                                        control={control}
                                        label="Что-нибудь безалкогольное"
                                    />
                                </div>

                                <div className={styles.group}>
                                    <p>Предпочтения по еде</p>
                                    <Checkbox<GuestResponse>
                                        name="removeMeat"
                                        control={control}
                                        label="Убрать мясо"
                                    />

                                    <Checkbox<GuestResponse>
                                        name="isAllergy"
                                        control={control}
                                        label="Есть аллергия"
                                    />

                                    {isAllergy && (
                                        <TextInput<GuestResponse>
                                            name="allergyType"
                                            control={control}
                                            placeholder="Аллергия"
                                            maxLength={60}
                                        />
                                    )}
                                </div>
                            </>
                        )}

                        <Button type="submit" text="Отправить" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
