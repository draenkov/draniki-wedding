import { GuestResponse } from 'components/Confirmation/Confirmation.types';

export interface VegansSummaryProps {
    guestResponses: Record<string, GuestResponse> | null;
}