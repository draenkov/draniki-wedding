import { GuestResponse } from 'components/Main/Confirmation/Confirmation.types';

export interface GuestFormValues {
    name: string;
}

export interface GuestListProps {
    guests: string[] | null;
    guestResponses: Record<string, GuestResponse> | null;
    handleGetGuests: () => Promise<void>;
}
