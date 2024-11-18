'use client';

import React, { FC, useEffect } from 'react';
import styles from 'app/login/login.module.scss';
import TextInput from 'components/Form/Controls/TextInput/TextInput.component';
import { useForm } from 'react-hook-form';
import { fontPrimary } from 'styles/fonts';
import Button from 'components/Button/Button.component';
import { signIn } from 'firebase/config';
import { useRouter } from 'next/navigation';
import { useAuthContext } from 'context/AuthContext';

interface FormValues {
    email: string;
    password: string;
}

const defaultValues: FormValues = {
    email: '',
    password: '',
};

const Login: FC = () => {
    const { user } = useAuthContext();
    const router = useRouter();
    const { handleSubmit, control } = useForm<FormValues>({
        mode: 'onBlur',
        defaultValues,
    });

    useEffect(() => {
        if (user) {
            router.replace('/admin');
        }
    }, [user, router]);

    const onSubmit = async ({ email, password }: FormValues): Promise<void> => {
        const { error } = await signIn(email, password);

        if (!error) {
            router.replace('/admin');
        }
    };

    return (
        <div className={`${styles.wrap} ${fontPrimary.className}`}>
            <div className={styles.container}>
                <form className={styles.login} onSubmit={handleSubmit(onSubmit)}>
                    <TextInput<FormValues> control={control} name="email" label="Логин" />
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

export default Login;