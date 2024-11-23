import { FC, useEffect, useRef, useState } from 'react';
import styles from 'components/Modal/Modal.module.scss';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { ModalProps } from 'components/Modal/Modal.types';
import { debounce } from 'helpers/debounce';
import CloseButton from 'components/Modal/CloseButton/CloseButton.component';

const OPEN_ANIMATION_DELAY = 20;
const CLOSE_ANIMATION_DELAY = 300;
const BLOCK_ANIMATION_DELAY = 150;

const Modal: FC<ModalProps> = ({
    isOpen,
    title,
    subTitle,
    hideClose,
    onClose = () => {},
    children,
    icon,
    closeStyle = 'default',
    isBlockOutsideClick = false,
}) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isOverlayBlocked, setIsOverlayBlocked] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpen = (): void => {
        setIsModalOpen(true);
        debounce(() => setIsVisible(true), OPEN_ANIMATION_DELAY)();

        document.body.classList.add('modal-open');
    };

    const handleClose = (): void => {
        setIsVisible(false);
        debounce(() => {
            setIsModalOpen(false);

            const modalsAmount = document.getElementsByClassName('modal-component').length;
            if (modalsAmount <= 1) {
                document.body.classList.remove('modal-open');
            }
        }, CLOSE_ANIMATION_DELAY)();
    };

    const escapeEventHandler = (): void => {
        if (modalRef?.current?.getElementsByClassName('modal-component').length) {
            return;
        }

        onClose();
    };

    const blockOutsideClick = (): void => {
        setIsOverlayBlocked(true);
        debounce(() => {
            setIsOverlayBlocked(false);
        }, BLOCK_ANIMATION_DELAY)();
    };

    const handleKeydown = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            return hideClose || isBlockOutsideClick ? blockOutsideClick() : escapeEventHandler();
        }
    };

    useEffect(() => {
        if (isOpen) {
            handleOpen();

            window.addEventListener('keydown', handleKeydown);
        }

        if (!isOpen && isModalOpen) {
            handleClose();
        }

        return () => {
            window.removeEventListener('keydown', handleKeydown);

            const modalsAmount = document.getElementsByClassName('modal-component').length;
            if (modalsAmount < 1) {
                document.body.classList.remove('modal-open');
            }
        };
    }, [isOpen, onClose]);

    useOutsideClick(modalRef, hideClose || isBlockOutsideClick ? blockOutsideClick : onClose);

    if (!isModalOpen) {
        return null;
    }

    return (
        <div
            className={`modal-component ${styles.overlay} ${isVisible ? styles.visible : styles.hidden} ${
                isOverlayBlocked ? styles.blocked : ''
            }`}
        >
            <div className={styles.modalWrapper} ref={modalRef}>
                {title && (
                    <div className={styles.modalHeader}>
                        <div className={styles.title}>
                            {icon}
                            <div className={styles.textWrap}>
                                <p className={styles.text}>{title}</p>
                                {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
                            </div>
                        </div>
                    </div>
                )}
                {!hideClose && (
                    <div className={styles.closeButton}>
                        <CloseButton
                            dataTest="close_modal_btn"
                            onClick={onClose}
                            btnStyle={closeStyle}
                        />
                    </div>
                )}
                <div className={styles.modalBody}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
