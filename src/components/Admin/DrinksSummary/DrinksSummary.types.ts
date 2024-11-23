import { GuestResponse } from 'components/Confirmation/Confirmation.types';

export interface DrinksSummaryProps {
    guests: string[] | null;
    guestResponses: Record<string, GuestResponse> | null;
}

export interface DrinksInfo {
    allGuests?: number;
    whiskey?: number;
    vodka?: number;
    wine?: number;
    champagne?: number;
    nonAlco?: number;
}
