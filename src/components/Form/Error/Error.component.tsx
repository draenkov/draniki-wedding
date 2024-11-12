import { FC } from 'react';
import styles from 'components/Form/Error/Error.module.scss';
import { ErrorProps } from 'components/Form/Error/Error.types';

const Error: FC<ErrorProps> = ({ error }) => <div className={styles.error}>{error}</div>;

export default Error;
