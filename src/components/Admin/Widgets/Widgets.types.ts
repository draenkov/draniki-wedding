import { GuestResponse } from 'components/Main/Confirmation/Confirmation.types';

export interface WidgetsProps {
    guests: string[] | null;
    guestResponses: Record<string, GuestResponse> | null;
}

export interface WidgetsInfo {
    allGuests?: number;
    positive?: number;
    negative?: number;
    daysLeft?: number;
}
