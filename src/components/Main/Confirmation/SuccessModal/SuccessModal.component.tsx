import React, { FC } from 'react';
import Modal from 'components/Modal/Modal.component';
import { SuccessModalProps } from 'components/Main/Confirmation/SuccessModal/SuccessModal.types';
import styles from 'components/Main/Confirmation/SuccessModal/SuccessModal.module.scss';
import Image from 'next/image';
import photo from 'assets/img/cat.jpg';

const SuccessModal: FC<SuccessModalProps> = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className={styles.body}>
            <p>Спасибо за ответ!</p>
            <Image src={photo} alt="Руби" className={styles.photo} />
        </div>
    </Modal>
);

export default SuccessModal;
