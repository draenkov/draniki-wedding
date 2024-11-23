import { MouseEventHandler } from 'react';

export interface CloseBtnProps {
    isDisabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
