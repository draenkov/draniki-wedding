'use client';

import React, { FC, useRef } from 'react';
import styles from 'components/Main/DressCode/DressCode.module.scss';
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

const DressCode: FC = () => {
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

    const colors = [
        { backgroundColor: '#252525', x: x1 },
        { backgroundColor: '#2e3458', x: x2 },
        { backgroundColor: '#828956', x: x3 },
        { backgroundColor: '#c16036', x: x4 },
        { backgroundColor: '#fff7d2', x: x5 },
    ];

    return (
        <div className={styles.wrap} ref={scrollRef}>
            <div className={styles.container}>
                <h3 className={styles.title}>Дресс-код</h3>
                <div className={styles.dressCode}>
                    <p>
                        Если вам сложно определиться с нарядом на праздник, то вы можете поддержать
                        цветовую гамму нашей свадьбы
                    </p>
                    <div className={styles.colorsWrap}>
                        {colors.map(({ backgroundColor, x }) => (
                            <motion.div
                                className={styles.color}
                                key={backgroundColor}
                                style={{ backgroundColor, x }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DressCode;
