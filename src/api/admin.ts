import { getDatabase, get, ref, child, set, remove } from '@firebase/database';
import { app } from 'firebase/config';
import { FormValues } from 'components/Confirmation/Confirmation.component';

export const getGuestResponses = async (): Promise<Record<string, FormValues>> => {
    const dbRef = ref(getDatabase(app));

    const snapshot = await get(child(dbRef, 'guestResponses'));

    if (snapshot.exists()) {
        return snapshot.val();
    }
};

export const setGuestResponse = async (formValues: FormValues): Promise<void> => {
    const dbRef = ref(getDatabase(app));

    await set(child(dbRef, 'guestResponses/' + formValues.name), formValues);
};

export const getGuests = async (): Promise<Record<string, string>> => {
    const dbRef = ref(getDatabase(app));

    const snapshot = await get(child(dbRef, 'guests'));

    if (snapshot.exists()) {
        return snapshot.val();
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
