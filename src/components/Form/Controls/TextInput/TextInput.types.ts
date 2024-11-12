import { FocusEventHandler } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

export interface TextInputProps<T extends FieldValues = FieldValues> {
    control: Control<T>;
    label: string;
    name: Path<T>;
    type?: string;
    placeholder?: string;
    isDisabled?: boolean;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    maxLength?: number;
}
