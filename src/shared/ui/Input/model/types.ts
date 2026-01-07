import { InputHTMLAttributes } from 'react';

export type InputVariants = 'primary' | 'secondary' | 'outlined';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string; // Плавающая метка
    error?: string; // Текст ошибки
    iconLeft?: React.ReactNode; // Иконка слева
    iconRight?: React.ReactNode; // Иконка справа
    variant?: InputVariants; // Визуальный стиль
    size?: 's' | 'm' | 'l'; // Размер
    fullWidth?: boolean; // Растянуть на 100%
    className?: string;
}
