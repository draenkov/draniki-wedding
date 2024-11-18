import React, { FC } from 'react';
import styles from 'components/Loader/Loader.module.scss';

const Loader: FC = () => (
    <div className={styles.loaderWrap}>
        <div className={styles.loader} />
    </div>
);

export default Loader;
