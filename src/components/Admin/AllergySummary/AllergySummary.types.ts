import { GuestResponse } from 'components/Confirmation/Confirmation.types';

export interface AllergySummaryProps {
    guestResponses: Record<string, GuestResponse> | null;
}