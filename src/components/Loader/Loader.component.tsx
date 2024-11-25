import React, { FC } from 'react';
import styles from 'components/Loader/Loader.module.scss';
import { LoaderProps } from 'components/Loader/Loader.types';

const Loader: FC<LoaderProps> = ({ isMini }) => (
    <div className={`${styles.loaderWrap} ${isMini ? styles.mini : ''}`}>
        <div className={styles.loader} />
    </div>
);

export default Loader;
