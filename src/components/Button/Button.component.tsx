import { FC } from 'react';
import styles from 'components/Button/Button.module.scss';
import { ButtonProps } from 'components/Button/Button.types';
import { fontPrimary } from 'styles/fonts';

const Button: FC<ButtonProps> = ({ type, className = '', text, onClick, isDisabled, name }) => (
    <button
        type={type}
        className={`${styles.button} ${fontPrimary.className} ${className}`}
        onClick={onClick}
        disabled={isDisabled}
        name={name}
    >
        {text}
    </button>
);

export default Button;
