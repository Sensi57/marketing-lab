export interface DropdownOption {
    label: string;
    value: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

export interface DropdownProps {
    options: DropdownOption[];
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void; // твой кастомный
    variant?: 'primary' | 'outlined' | 'ghost';
    size?: 's' | 'm' | 'l';
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
}
