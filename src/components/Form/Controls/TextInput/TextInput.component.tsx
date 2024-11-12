import { FieldValues, useController } from 'react-hook-form';
import Label from 'components/Form/Label/Label.component';
import Error from 'components/Form/Error/Error.component';
import { TextInputProps } from 'components/Form/Controls/TextInput/TextInput.types';
import styles from 'components/Form/Controls/TextInput/TextInput.module.scss';
import { fontPrimary } from 'styles/fonts';
import { ReactElement } from 'react';

const TextInput = <T extends FieldValues>({
    label,
    type,
    placeholder,
    isDisabled,
    onFocus,
    name,
    control,
    maxLength,
}: TextInputProps<T>): ReactElement => {
    const {
        field: { value, onChange, onBlur },
        fieldState,
    } = useController({ name, control });

    return (
        <div
            className={`${styles.fieldWrap} ${fieldState.error?.message ? styles.fieldError : ''}`}
        >
            {label && <Label label={label} name={name} />}

            <input
                className={`${styles.input} ${isDisabled ? styles.disabled : ''} ${fontPrimary.className}`}
                placeholder={placeholder}
                type={type}
                disabled={isDisabled}
                maxLength={maxLength}
                id={name}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                name={name}
            />

            {fieldState.error?.message && <Error error={fieldState.error.message} />}
        </div>
    );
};

export default TextInput;
