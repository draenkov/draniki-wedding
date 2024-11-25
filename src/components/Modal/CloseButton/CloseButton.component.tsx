import React, { FC } from 'react';
import CloseIcon from 'assets/svg/close.svg';
import styles from 'components/Modal/CloseButton/CloseButton.module.scss';
import { CloseBtnProps } from 'components/Modal/CloseButton/CloseButton.types';
import Image from 'next/image';

const CloseButton: FC<CloseBtnProps> = ({ onClick }) => (
    <button type="button" className={styles.closeBtn} onClick={onClick}>
        <Image src={CloseIcon as string} alt="close" />
    </button>
);

export default CloseButton;
