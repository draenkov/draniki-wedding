import { type FieldErrors } from 'react-hook-form';

const ADDITIONAL_INDENT = 70;

export const scrollToFirstError = (errors: FieldErrors): void => {
    const fieldName = Object.keys(errors)[0];

    const firstErrorField =
        document.getElementById(fieldName) || document.querySelector(`[name="${fieldName}"]`);

    if (firstErrorField) {
        window.scrollTo({
            top: window.scrollY + firstErrorField.getBoundingClientRect().top - ADDITIONAL_INDENT,
            behavior: 'smooth',
        });
    }
};
