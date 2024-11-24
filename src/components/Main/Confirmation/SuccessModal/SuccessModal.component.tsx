import React, { FC } from 'react';
import Modal from 'components/Modal/Modal.component';
import { SuccessModalProps } from 'components/Main/Confirmation/SuccessModal/SuccessModal.types';
import styles from 'components/Main/Confirmation/SuccessModal/SuccessModal.module.scss';

const SuccessModal: FC<SuccessModalProps> = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className={styles.body}>Спасибо за ответ!</div>
    </Modal>
);

export default SuccessModal;
