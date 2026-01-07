import { ReactNode, ButtonHTMLAttributes } from 'react';

type SizeTypes = 's' | 'm' | 'l';
type VariantTypes = 'primary' | 'secondary' | 'ghost';
type BorderRadiusTypes = 'normal' | 'half' | 'full';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
    variant?: VariantTypes;
    size?: SizeTypes;
    badge?: ReactNode;
    rounded?: BorderRadiusTypes;
    fullWidth?: boolean;
    fullHeight?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
}
