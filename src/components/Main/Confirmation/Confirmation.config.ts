import { boolean, object, ObjectSchema, string, type TestContext } from 'yup';
import { GuestResponse } from 'components/Main/Confirmation/Confirmation.types';

const ONLY_CYRILLIC = /^[А-ЯЁ\s-]*$/i;
const ERRORS = {
    required: 'Обязательно для заполнения',
    onlyCyrillic: 'Только русские символы',
    incorrect: 'Нет в списке гостей. Проверьте введенные данные',
};

export const clearName = (name: string): string =>
    name
        .replaceAll('ё', 'е')
        .split(' ')
        .reduce<string[]>((acc, nameItem) => {
            if (nameItem) {
                acc.push(nameItem);
            }

            return acc;
        }, [])
        .join(' ');

const checkGuest = (name: string, { options }: TestContext): boolean =>
    !!options?.context && clearName(name) in options.context;

export const schema: ObjectSchema<GuestResponse> = object({
    name: string()
        .required(ERRORS.required)
        .matches(ONLY_CYRILLIC, ERRORS.onlyCyrillic)
        .test('checkGuest', ERRORS.incorrect, checkGuest),
    confirmation: string(),
    whiskey: boolean(),
    vodka: boolean(),
    wine: boolean(),
    champagne: boolean(),
    nonAlco: boolean(),
    isAllergy: boolean(),
    allergyType: string(),
    removeMeat: boolean(),
});
