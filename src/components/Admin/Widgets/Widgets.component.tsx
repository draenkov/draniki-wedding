import React, { FC, useEffect, useState } from 'react';
import { WidgetsInfo, WidgetsProps } from 'components/Admin/Widgets/Widgets.types';
import styles from 'components/Admin/Widgets/Widgets.module.scss';

const Widgets: FC<WidgetsProps> = ({ guests, guestResponses }) => {
    const [info, setInfo] = useState<WidgetsInfo | null>(null);
    const calculate = () => {
        if (guestResponses) {
            const allGuests = guests?.length;
            const positive = Object.values(guestResponses).filter(
                response => response.confirmation === 'positive',
            )?.length;
            const negative = Object.values(guestResponses).filter(
                response => response.confirmation === 'negative',
            )?.length;
            const daysLeft = Math.floor(
                (new Date('2025-07-12') - new Date()) / (1000 * 60 * 60 * 24),
            );
            setInfo({
                allGuests,
                positive,
                negative,
                daysLeft,
            });
        }
    };

    useEffect(() => {
        if (guests?.length && guestResponses) {
            calculate();
        }
    }, [guests, guestResponses]);

    if (!guests?.length) {
        return null;
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.widget}>
                <p>
                    {info?.positive} / {info?.allGuests}
                </p>
                <p className={styles.tip}>Согласие</p>
            </div>
            <div className={styles.widget}>
                <p>
                    {info?.negative} / {info?.allGuests}
                </p>
                <p className={styles.tip}>Отказ</p>
            </div>
            <div className={styles.widget}>
                <p>{info?.allGuests}</p>
                <p className={styles.tip}>Всего гостей</p>
            </div>
            <div className={styles.widget}>
                <p>{info?.daysLeft}</p>
                <p className={styles.tip}>Осталось дней</p>
            </div>
        </div>
    );
};

export default Widgets;
