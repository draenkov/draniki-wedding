import { type FieldValues, useController } from 'react-hook-form';
import Label from 'components/Form/Label/Label.component';
import Error from 'components/Form/Error/Error.component';
import { RadioGroupProps } from 'components/Form/Controls/RadioInput/RadioGroup.types';
import styles from 'components/Form/Controls/RadioInput/RadioGroup.module.scss';
import { ReactElement } from 'react';

const RadioInput = <T extends FieldValues>({
    label,
    isColumnDirection = true,
    options,
    isDisabled,
    name,
    control,
}: RadioGroupProps<T>): ReactElement => {
    const {
        field: { value, onChange, onBlur },
        fieldState,
    } = useController({ name, control });

    return (
        <div className={`${styles.wrap} ${fieldState.error?.message ? styles.radioError : ''}`}>
            {label && <Label label={label} name={name} />}

            <div className={`${styles.radioGroup} ${isColumnDirection ? styles.column : ''}`}>
                {options?.map(({ label: radioText, value: radioValue }) => (
                    <label className={styles.customRadio} key={radioValue}>
                        <input
                            type="radio"
                            name={name}
                            value={radioValue}
                            disabled={isDisabled}
                            defaultChecked={radioValue === value}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        <div className={styles.control} />
                        <span>{radioText}</span>
                    </label>
                ))}
            </div>

            {fieldState.error?.message && <Error error={fieldState.error.message} />}
        </div>
    );
};

export default RadioInput;
