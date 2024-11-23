'use client';

import React, { FC, useEffect } from 'react';
import styles from 'app/login/login.module.scss';
import TextInput from 'components/Form/Controls/TextInput/TextInput.component';
import { useForm } from 'react-hook-form';
import { fontPrimary } from 'styles/fonts';
import Button from 'components/Button/Button.component';
import { useRouter } from 'next/navigation';
import { useAuthContext } from 'context/AuthContext';
import Loader from 'components/Loader/Loader.component';
import { signIn } from 'api/auth';

interface LoginFormValues {
    email: string;
    password: string;
}

const defaultValues: LoginFormValues = {
    email: '',
    password: '',
};

const Login: FC = () => {
    const { user } = useAuthContext();
    const router = useRouter();
    const { handleSubmit, control } = useForm<LoginFormValues>({
        mode: 'onBlur',
        defaultValues,
    });

    useEffect(() => {
        if (user) {
            router.replace('/admin');
        }
    }, [user, router]);

    const onSubmit = async ({ email, password }: LoginFormValues): Promise<void> => {
        const { error } = await signIn(email, password);

        if (!error) {
            router.replace('/admin');
        }
    };

    if (user) {
        return <Loader />;
    }

    return (
        <div className={`${styles.wrap} ${fontPrimary.className}`}>
            <div className={styles.container}>
                <form className={styles.login} onSubmit={handleSubmit(onSubmit)}>
                    <TextInput<LoginFormValues> control={control} name="email" label="Логин" />
                    <TextInput<LoginFormValues>
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
