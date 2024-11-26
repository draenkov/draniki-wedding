import { GuestResponse } from 'components/Main/Confirmation/Confirmation.types';

export interface DrinksSummaryProps {
    guests: string[] | null;
    guestResponses: Record<string, GuestResponse> | null;
}

export interface DrinksInfo {
    allGuests: number;
    whiskey: number;
    vodka: number;
    wine: number;
    champagne: number;
    nonAlco: number;
}

export interface OrderItem {
    title: string;
    value: keyof DrinksInfo;
}
