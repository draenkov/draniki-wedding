import { ReactElement, ReactNode } from 'react';

export interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
    onClose?: () => void;
    title?: string;
    subTitle?: string | ReactElement;
    hideClose?: boolean;
    icon?: ReactElement;
    isBlockOutsideClick?: boolean;
}
