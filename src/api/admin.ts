import { getDatabase, get, ref, child, set, remove } from '@firebase/database';
import { app } from 'firebase/config';
import { GuestResponse } from 'components/Main/Confirmation/Confirmation.types';

export const getGuestResponses = async (): Promise<Record<string, GuestResponse>> => {
    const dbRef = ref(getDatabase(app));

    const snapshot = await get(child(dbRef, 'guestResponses'));

    if (snapshot.exists()) {
        return snapshot.val() as Record<string, GuestResponse>;
    }
};

export const setGuestResponse = async (formValues: GuestResponse): Promise<void> => {
    const dbRef = ref(getDatabase(app));

    await set(child(dbRef, 'guestResponses/' + formValues.name), formValues);
};

export const removeGuestResponse = async (name: string): Promise<void> => {
    const dbRef = ref(getDatabase(app));

    await remove(child(dbRef, 'guestResponses/' + name));
};

export const getGuests = async (): Promise<Record<string, string>> => {
    const dbRef = ref(getDatabase(app));

    const snapshot = await get(child(dbRef, 'guests'));

    if (snapshot.exists()) {
        return snapshot.val() as Record<string, string>;
    }
};

export const setGuest = async (name: string): Promise<void> => {
    const dbRef = ref(getDatabase(app));

    await set(child(dbRef, 'guests/' + name), name);
};

export const removeGuest = async (name: string): Promise<void> => {
    const dbRef = ref(getDatabase(app));

    await remove(child(dbRef, 'guests/' + name));
};
