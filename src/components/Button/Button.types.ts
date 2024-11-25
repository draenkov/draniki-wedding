export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    text: string;
    onClick?: () => void;
    isDisabled?: boolean;
    name?: string;
}
