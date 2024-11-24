import { GuestResponse } from 'components/Main/Confirmation/Confirmation.types';

export interface GuestInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    guestInfo: GuestResponse | null;
}
