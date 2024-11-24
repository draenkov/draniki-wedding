import React, { FC, useEffect, useState } from 'react';
import styles from 'components/Admin/AllergySummary/AllergySummary.module.scss';
import { AllergySummaryProps } from 'components/Admin/AllergySummary/AllergySummary.types';
import { GuestResponse } from 'components/Confirmation/Confirmation.types';
const AllergySummary: FC<AllergySummaryProps> = ({ guestResponses }) => {
    const [info, setInfo] = useState<GuestResponse[] | null>(null);

    useEffect(() => {
        if (guestResponses?.length) {
            setInfo(Object.values(guestResponses).filter(response => response.isAllergy));
        }
    }, [guestResponses]);

    return (
        <div className={styles.wrap}>
            <p>Аллергия:</p>

            {guestResponses && info?.length ? (
                info?.map(guest => (
                    <p key={guest.name}>
                        {guest.name} - {guest.allergyType}
                    </p>
                ))
            ) : (
                <p>Нет информации</p>
            )}
        </div>
    );
};

export default AllergySummary;
