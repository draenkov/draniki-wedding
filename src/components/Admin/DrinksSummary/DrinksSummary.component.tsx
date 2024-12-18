import React, { FC, useEffect, useState } from 'react';
import styles from 'components/Admin/DrinksSummary/DrinksSummary.module.scss';
import {
    DrinksInfo,
    DrinksSummaryProps,
    type OrderItem,
} from 'components/Admin/DrinksSummary/DrinksSummary.types';

const order: OrderItem[] = [
    { title: 'Виски', value: 'whiskey' },
    { title: 'Водка', value: 'vodka' },
    { title: 'Вино', value: 'wine' },
    { title: 'Шампанское', value: 'champagne' },
    { title: 'Что-нибудь безалкогольное', value: 'nonAlco' },
];

const PERCENT100 = 100;

const DrinksSummary: FC<DrinksSummaryProps> = ({ guests, guestResponses }) => {
    const [info, setInfo] = useState<DrinksInfo | null>(null);
    const calculate = (): void => {
        if (guestResponses) {
            const allGuests = guests?.length || 0;

            const responses = Object.values(guestResponses);
            const whiskey = responses.filter(response => response.whiskey)?.length;
            const vodka = responses.filter(response => response.vodka)?.length;
            const wine = responses.filter(response => response.wine)?.length;
            const champagne = responses.filter(response => response.champagne)?.length;
            const nonAlco = responses.filter(response => response.nonAlco)?.length;

            setInfo({
                allGuests,
                whiskey,
                vodka,
                wine,
                champagne,
                nonAlco,
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
            {guests &&
                order.map(({ title, value }) => (
                    <div className={styles.item} key={value}>
                        <p>{title}</p>
                        {info && (
                            <div
                                className={`${styles.progress} ${!info?.[value] ? styles.empty : ''}`}
                                style={{
                                    background: `linear-gradient(to right, #333D51 ${(info[value] / info?.allGuests) * PERCENT100}%, transparent ${(info?.[value] / info?.allGuests) * PERCENT100}%)`,
                                }}
                            >
                                {info?.[value] || 0}
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default DrinksSummary;
