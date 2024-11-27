import React, { FC } from 'react';
import styles from 'components/Main/Timeline/Timeline.module.scss';
import GlassesIcon from 'assets/svg/glasses.svg';
import RingsIcon from 'assets/svg/rings.svg';
import PlateIcon from 'assets/svg/plate.svg';
import CakeIcon from 'assets/svg/cake.svg';
import TaxiIcon from 'assets/svg/taxi.svg';
import Image from 'next/image';

const Timeline: FC = () => (
    <div className={styles.wrap}>
        <div className={styles.container}>
            <h3 className={styles.title}>Тайминг</h3>
            <div className={styles.timing}>
                <div className={styles.timingItem}>
                    <Image src={GlassesIcon as string} alt="glasses" />
                    <div className={styles.time}>
                        <p className={styles.value}>16:00</p>
                        <p>Сбор гостей + фуршет</p>
                    </div>
                </div>

                <div className={styles.timingItem}>
                    <Image src={RingsIcon as string} alt="rings" />
                    <div className={styles.time}>
                        <p className={styles.value}>16:30</p>
                        <p>Церемония бракосочетания</p>
                    </div>
                </div>

                <div className={styles.timingItem}>
                    <Image src={PlateIcon as string} alt="rings" />
                    <div className={styles.time}>
                        <p className={styles.value}>17:30</p>
                        <p>Банкет</p>
                    </div>
                </div>

                <div className={styles.timingItem}>
                    <Image src={CakeIcon as string} alt="rings" />
                    <div className={styles.time}>
                        <p className={styles.value}>22:00</p>
                        <p>Торт</p>
                    </div>
                </div>

                <div className={styles.timingItem}>
                    <Image src={TaxiIcon as string} alt="rings" />
                    <div className={styles.time}>
                        <p className={styles.value}>00:00</p>
                        <p>Завершение вечера</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Timeline;
