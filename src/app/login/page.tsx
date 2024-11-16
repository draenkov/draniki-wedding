'use client';

import React, { FC } from 'react';
import styles from 'app/login/login.module.scss';
import TextInput from 'components/Form/Controls/TextInput/TextInput.component';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from 'components/Confirmation/Confirmation.config';
import { fontPrimary } from 'styles/fonts';
import Button from 'components/Button/Button.component';

interface FormValues {
    login: string;
    password: string;
}

const defaultValues: FormValues = {
    login: '',
    password: '',
};

const Page: FC = () => {
    const { handleSubmit, control } = useForm<FormValues>({
        mode: 'onBlur',
        defaultValues,
        resolver: yupResolver(schema),
    });

    const onSubmit = (values: FormValues): void => {
        console.log(values);
    };

    return (
        <div className={`${styles.wrap} ${fontPrimary.className}`}>
            <div className={styles.container}>
                <form className={styles.login} onSubmit={() => handleSubmit(onSubmit)}>
                    <TextInput<FormValues> control={control} name="login" label="Логин" />
                    <TextInput<FormValues>
                        control={control}
                        name="password"
                        label="Пароль"
                        type="password"
                    />
                    <Button type="submit" text="Отправить" />
                </form>
            </div>
        </div>
    );
};

export default Page;
