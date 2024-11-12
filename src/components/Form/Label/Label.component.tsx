import { FC } from 'react';
import { LabelProps } from 'components/Form/Label/Label.types';
import styles from 'components/Form/Label/Label.module.scss';

const Label: FC<LabelProps> = ({ name, label }) => (
    <label className={styles.label} htmlFor={name}>
        {label}
    </label>
);

export default Label;
