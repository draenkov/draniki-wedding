import React, { FC } from 'react';
import styles from 'components/Place/Place.module.scss';

const Place: FC = () => (
    <div className={styles.wrap}>
        <div className={styles.place}>
            <h3 className={styles.title}>Место проведения</h3>
            <div className={styles.info}>
                <p>Ресторан Шервуд</p>
                <p>г. Гродно, ул. Подольная 37</p>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9454.775279800564!2d23.8368081!3d53.6702588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd766c25420b7%3A0xd838d953829f998b!2z0KjQtdGA0LLRg9C0IOKAnFNoZXJ3b29k4oCdIC0g0LHQuNC30L3QtdGBINC70LDQvdGH0LgsINCx0YDQsNC90YfQuCwg0YPQttC40L0!5e0!3m2!1sru!2sby!4v1731423351409!5m2!1sru!2sby"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    </div>
);

export default Place;
