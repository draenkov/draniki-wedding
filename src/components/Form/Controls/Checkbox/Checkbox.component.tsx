import { FieldValues, useController } from 'react-hook-form';
import { CheckboxProps } from 'components/Form/Controls/Checkbox/Checkbox.types';
import { ReactElement } from 'react';
import styles from 'components/Form/Controls/Checkbox/Checkbox.module.scss';
import Error from 'components/Form/Error/Error.component';

const Checkbox = <T extends FieldValues>({
    label,
    isDisabled,
    className,
    name,
    control,
}: CheckboxProps<T>): ReactElement => {
    const {
        field: { value, onChange, onBlur },
        fieldState,
    } = useController({ name, control });

    return (
        <div className={styles.checkboxWrap}>
            <label htmlFor={name} className={className}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    id={name}
                    data-test={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    disabled={isDisabled}
                />
                <span className={styles.customCheckbox}>
                    <i className={styles.checkIcon} />
                </span>
                <span className={styles.title}>{label}</span>
            </label>

            {fieldState.error?.message && <Error error={fieldState.error.message} />}
        </div>
    );
};

export default Checkbox;
