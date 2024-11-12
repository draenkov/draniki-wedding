import { ChangeEventHandler, FocusEventHandler, ReactElement } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

export interface CheckboxProps<T extends FieldValues = FieldValues> {
    control?: Control<T>;
    name: Path<T>;
    label?: string | ReactElement;
    error?: string;
    isChecked?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    value?: boolean;
    className?: string;
    isDisabled?: boolean;
}
