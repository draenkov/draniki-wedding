import { GuestResponse } from 'components/Main/Confirmation/Confirmation.types';

export interface AllergySummaryProps {
    guestResponses: Record<string, GuestResponse> | null;
}