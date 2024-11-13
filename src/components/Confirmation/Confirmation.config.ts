import { object, string } from 'yup';

const ONLY_CYRILLIC = /^[А-ЯЁ\s-]*$/i;
const ERRORS = {
    required: 'Обязательно для заполнения',
    onlyCyrillic: 'Только русские символы',
    incorrect: 'Нет в списке гостей. Проверьте введенные данные',
};
const surnameList = ['Драенков', 'Драенкова', 'Бондарев'];

const checkSurname = (name: string): boolean =>
    !!name.split(' ').find(value => surnameList.includes(value));

export const schema = object({
    name: string()
        .required(ERRORS.required)
        .matches(ONLY_CYRILLIC, ERRORS.onlyCyrillic)
        .test('checkSurname', ERRORS.incorrect, checkSurname),
});
