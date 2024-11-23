import { GuestResponse } from 'components/Confirmation/Confirmation.types';

export interface GuestInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    guestInfo: GuestResponse | null;
}
