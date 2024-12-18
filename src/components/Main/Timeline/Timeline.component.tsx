'use client';

import React, { FC, useRef } from 'react';
import styles from 'components/Main/Timeline/Timeline.module.scss';
import GlassesIcon from 'assets/svg/glasses.svg';
import RingsIcon from 'assets/svg/rings.svg';
import PlateIcon from 'assets/svg/plate.svg';
import CakeIcon from 'assets/svg/cake.svg';
import TaxiIcon from 'assets/svg/taxi.svg';
import Image from 'next/image';
import { motion } from 'motion/react';
import useDeviceDetect from 'hooks/useDeviceDetect';
import { useParallax } from 'hooks/useParallax';
import {
    MOTION_END2,
    MOTION_END3,
    MOTION_END4,
    MOTION_END5,
    MOTION_END6,
    START_POSITION_MOBILE_X,
    START_POSITION_X,
} from 'constants/constants';

const Timeline: FC = () => {
    const isMobile = useDeviceDetect() === 'mobile';
    const scrollRef = useRef(null);

    const x1 = useParallax(scrollRef, MOTION_END2, [
        isMobile ? START_POSITION_MOBILE_X : START_POSITION_X,
        0,
    ]);
    const x2 = useParallax(scrollRef, MOTION_END3, [
        isMobile ? START_POSITION_MOBILE_X : START_POSITION_X,
        0,
    ]);
    const x3 = useParallax(scrollRef, MOTION_END4, [
        isMobile ? START_POSITION_MOBILE_X : START_POSITION_X,
        0,
    ]);
    const x4 = useParallax(scrollRef, MOTION_END5, [
        isMobile ? START_POSITION_MOBILE_X : START_POSITION_X,
        0,
    ]);
    const x5 = useParallax(scrollRef, MOTION_END6, [
        isMobile ? START_POSITION_MOBILE_X : START_POSITION_X,
        0,
    ]);

    return (
        <div className={styles.wrap} ref={scrollRef}>
            <div className={styles.container}>
                <h3 className={styles.title}>Тайминг</h3>
                <div className={styles.timing}>
                    <motion.div className={styles.timingItem} style={{ x: x1 }}>
                        <Image src={GlassesIcon as string} alt="glasses" />
                        <div className={styles.time}>
                            <p className={styles.value}>16:00</p>
                            <p>Сбор гостей + фуршет</p>
                        </div>
                    </motion.div>

                    <motion.div className={styles.timingItem} style={{ x: x2 }}>
                        <Image src={RingsIcon as string} alt="rings" />
                        <div className={styles.time}>
                            <p className={styles.value}>16:30</p>
                            <p>Церемония бракосочетания</p>
                        </div>
                    </motion.div>

                    <motion.div className={styles.timingItem} style={{ x: x3 }}>
                        <Image src={PlateIcon as string} alt="rings" />
                        <div className={styles.time}>
                            <p className={styles.value}>17:30</p>
                            <p>Банкет</p>
                        </div>
                    </motion.div>

                    <motion.div className={styles.timingItem} style={{ x: x4 }}>
                        <Image src={CakeIcon as string} alt="rings" />
                        <div className={styles.time}>
                            <p className={styles.value}>22:00</p>
                            <p>Торт</p>
                        </div>
                    </motion.div>

                    <motion.div className={styles.timingItem} style={{ x: x5 }}>
                        <Image src={TaxiIcon as string} alt="rings" />
                        <div className={styles.time}>
                            <p className={styles.value}>00:00</p>
                            <p>Завершение вечера</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
