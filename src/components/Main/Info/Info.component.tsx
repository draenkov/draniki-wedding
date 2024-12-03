'use client';

import React, { FC, useRef } from 'react';
import styles from 'components/Main/Info/Info.module.scss';
import Image from 'next/image';
import photo from 'assets/img/photo2.jpg';
import { motion } from 'motion/react';
import useDeviceDetect from 'hooks/useDeviceDetect';
import { useParallax } from 'hooks/useParallax';
import { MOTION_END4, START_POSITION_MOBILE_Y, START_POSITION_Y } from 'constants/constants';

const Info: FC = () => {
    const scrollRef = useRef(null);
    const isMobile = useDeviceDetect() === 'mobile';

    const opacity = useParallax(scrollRef, MOTION_END4, [0, 1]);
    const y = useParallax(scrollRef, MOTION_END4, [
        isMobile ? START_POSITION_MOBILE_Y : START_POSITION_Y,
        0,
    ]);

    return (
        <div className={styles.wrap}>
            <motion.div className={styles.info} style={{ opacity, y }} ref={scrollRef}>
                <div className={styles.infoItem}>
                    <p className={styles.title}>Когда?</p>
                    <p>12 июля 2025</p>
                </div>
                <div className={styles.infoItem}>
                    <p className={styles.title}>Где?</p>
                    <p>г. Гродно</p>
                </div>
            </motion.div>
            <div className={styles.photo}>
                <Image src={photo} width={720} height={480} alt="Второе лучшее фото молодых" />
            </div>
        </div>
    );
};

export default Info;
