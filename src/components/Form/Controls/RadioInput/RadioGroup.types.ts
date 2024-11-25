import { ChangeEventHandler, FocusEventHandler } from 'react';
import { type Control, type FieldValues, type Path } from 'react-hook-form';

interface RadioOptions {
    label: string;
    value: string;
}

export interface RadioGroupProps<T extends FieldValues = FieldValues> {
    options: RadioOptions[];
    label?: string;
    isDisabled?: boolean;
    error?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    value?: string;
    isColumnDirection?: boolean;
    control?: Control<T>;
    name: Path<T>;
}
