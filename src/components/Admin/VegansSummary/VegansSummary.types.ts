import { GuestResponse } from 'components/Main/Confirmation/Confirmation.types';

export interface VegansSummaryProps {
    guestResponses: Record<string, GuestResponse> | null;
}