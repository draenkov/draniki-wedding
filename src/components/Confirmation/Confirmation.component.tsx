'use client';

import React, { FC } from 'react';
import styles from 'components/Confirmation/Confirmation.module.scss';
import { useForm } from 'react-hook-form';
import TextInput from 'components/Form/Controls/TextInput/TextInput.component';
import RadioInput from 'components/Form/Controls/RadioInput/RadioInput.component';
import Checkbox from 'components/Form/Controls/Checkbox/Checkbox.component';
interface FormValues {
    name: string;
    confirmation: string;
    whiskey: boolean;
    vodka: boolean;
    wine: boolean;
    champagne: boolean;
    nonAlco: boolean;
}

const defaultValues = {
    name: '',
    confirmation: '',
    whiskey: false,
    vodka: false,
    wine: false,
    champagne: false,
    nonAlco: false,
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
    const { handleSubmit, control } = useForm<FormValues>({
        mode: 'onBlur',
        defaultValues,
    });

    const onSubmit = values => {
        console.log(values);
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
                        <TextInput<FormValues>
                            name="name"
                            control={control}
                            label="Имя и Фамилия"
                            placeholder="Имя Фамилия"
                            maxLength={40}
                        />

                        <RadioInput<FormValues>
                            name="confirmation"
                            control={control}
                            label="Подтвердите присутствие"
                            options={confirmationOptions}
                        />

                        <div className={styles.group}>
                            <p>Предпочтения по напиткам</p>

                            <Checkbox<FormValues> name="whiskey" control={control} label="Виски" />
                            <Checkbox<FormValues> name="vodka" control={control} label="Водка" />
                            <Checkbox<FormValues> name="wine" control={control} label="Вино" />
                            <Checkbox<FormValues>
                                name="champagne"
                                control={control}
                                label="Шампанское"
                            />
                            <Checkbox<FormValues>
                                name="nonAlco"
                                control={control}
                                label="Что-нибудь безалкогольное"
                            />
                        </div>

                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
