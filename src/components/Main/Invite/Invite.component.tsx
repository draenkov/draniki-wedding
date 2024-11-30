'use client';

import React, { FC } from 'react';
import styles from 'components/Main/Invite/Invite.module.scss';
import { fontAccent } from 'styles/fonts';
import Image from 'next/image';
import photo from 'assets/img/photo1.jpg';
import { motion } from 'motion/react';

const Invite: FC = () => (
    <div className={styles.wrap}>
        <h1 className={`${fontAccent.className} ${styles.h1}`}>Яна и Вячеслав</h1>
        <div className={styles.info}>
            <div className={styles.infoItem}>
                <p>12.07.2025</p>
                <p className={styles.tip}>дата</p>
            </div>
            <div className={styles.infoItem}>
                <p>г. Гродно</p>
                <p className={styles.tip}>место</p>
            </div>
        </div>

        <motion.div
            className={styles.photo}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <Image src={photo} alt="Лучшее фото молодых" width={400} height={400} priority />
        </motion.div>

        <div className={styles.description}>
            <h2 className={styles.title}>Дорогие друзья и семья</h2>
            <p>Этим летом произойдет очень особенное и радостное событие - наша свадьба</p>
            <p>
                Невозможно представить этот день без самых близких людей. Поэтому мы с радостью
                приглашаем вас присоединиться и разделить с нами этот замечательный праздник
            </p>
        </div>
    </div>
);
export default Invite;
