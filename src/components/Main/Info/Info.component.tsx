import React, { FC } from 'react';
import styles from 'components/Main/Info/Info.module.scss';
import Image from 'next/image';
import photo from 'assets/img/photo2.jpg';

const Info: FC = () => (
    <div className={styles.wrap}>
        <div className={styles.info}>
            <div className={styles.infoItem}>
                <p className={styles.title}>Когда?</p>
                <p>12 июля 2025</p>
            </div>
            <div className={styles.infoItem}>
                <p className={styles.title}>Где?</p>
                <p>г. Гродно</p>
            </div>
        </div>
        <Image src={photo} alt="Второе лучшее фото молодых" className={styles.photo} />
    </div>
);

export default Info;
