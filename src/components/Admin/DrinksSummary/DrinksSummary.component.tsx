import React, { FC, useEffect, useState } from 'react';
import styles from 'components/Admin/DrinksSummary/DrinksSummary.module.scss';
import { DrinksInfo, DrinksSummaryProps } from 'components/Admin/DrinksSummary/DrinksSummary.types';

const order = [
    { title: 'Виски', value: 'whiskey' },
    { title: 'Водка', value: 'vodka' },
    { title: 'Вино', value: 'wine' },
    { title: 'Шампанское', value: 'champagne' },
    { title: 'Что-нибудь безалкогольное', value: 'nonAlco' },
];

const DrinksSummary: FC<DrinksSummaryProps> = ({ guests, guestResponses }) => {
    const [info, setInfo] = useState<DrinksInfo | null>(null);
    const calculate = () => {
        if (guestResponses) {
            const allGuests = guests?.length;

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
                        <div
                            className={`${styles.progress} ${!info?.[value] ? styles.empty : ''}`}
                            style={{
                                background: `linear-gradient(to right, #333D51 ${(info?.[value] / info?.allGuests) * 100}%, transparent ${(info?.[value] / info?.allGuests) * 100}%)`,
                            }}
                        >
                            {info?.[value] || 0}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default DrinksSummary;
