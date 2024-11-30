'use client';

import React, { FC, useRef } from 'react';
import styles from 'components/Main/Info/Info.module.scss';
import Image from 'next/image';
import photo from 'assets/img/photo2.jpg';
import { motion, useScroll, useTransform } from 'motion/react';
import useDeviceDetect from 'hooks/useDeviceDetect';

const START_POSITION = 200;
const START_POSITION_MOBILE = 100;
const MOTION_END = 0.2;

const Info: FC = () => {
    const isMobile = useDeviceDetect() === 'mobile';
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, MOTION_END], [0, 1]);
    const y = useTransform(
        scrollYProgress,
        [0, MOTION_END],
        [isMobile ? START_POSITION_MOBILE : START_POSITION, 0],
    );

    return (
        <motion.div className={styles.wrap} ref={scrollRef} style={{ opacity, y }}>
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
            <div className={styles.photo}>
                <Image src={photo} alt="Второе лучшее фото молодых" />
            </div>
        </motion.div>
    );
};

export default Info;
