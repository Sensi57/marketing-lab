import type { ElementType } from 'react';

export type JustifyContent = 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly';
export type AlignContent = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type Direction = 'row' | 'column';
export type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type Gap = '2' | '4' | '8' | '12' | '14' | '16' | '20' | '24' | '32' | '38' | '120';

export type FlexElement = 'div' | 'a' | 'header' | 'footer' | 'ul';

interface FlexOwnProps<T extends ElementType = 'div'> {
    as?: T;
    className?: string;
    justify?: JustifyContent;
    align?: AlignContent;
    direction?: Direction;
    wrap?: Wrap;
    gap?: Gap;
    fullWidth?: boolean;
    fullHeight?: boolean;
    dataTestId?: string;
}

export type FlexProps<T extends ElementType> = React.PropsWithChildren<
    FlexOwnProps<T> & Omit<React.ComponentPropsWithRef<T>, keyof FlexOwnProps>
>;
