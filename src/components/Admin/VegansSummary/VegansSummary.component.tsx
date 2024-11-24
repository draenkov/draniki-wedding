import React, { FC, useEffect, useState } from 'react';
import styles from 'components/Admin/VegansSummary/VegansSummary.module.scss';
import { VegansSummaryProps } from 'components/Admin/VegansSummary/VegansSummary.types';
import { GuestResponse } from 'components/Main/Confirmation/Confirmation.types';
const VegansSummary: FC<VegansSummaryProps> = ({ guestResponses }) => {
    const [info, setInfo] = useState<GuestResponse[] | null>(null);

    useEffect(() => {
        if (guestResponses?.length) {
            setInfo(Object.values(guestResponses).filter(response => response.removeMeat));
        }
    }, [guestResponses]);

    return (
        <div className={styles.wrap}>
            <p>Не едят мясо:</p>

            {guestResponses && info?.length ? (
                info?.map(guest => <p key={guest.name}>{guest.name}</p>)
            ) : (
                <p>Нет информации</p>
            )}
        </div>
    );
};

export default VegansSummary;
