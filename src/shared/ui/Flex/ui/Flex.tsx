import { forwardRef, type ElementType, type Ref, type ReactElement } from 'react';
import clsx from 'clsx';

import styles from './Flex.module.scss';
import {
    AlignClasses,
    DirectionClasses,
    GapClasses,
    JustifyClasses,
    WrapClasses,
} from '../model/helpers';
import type { FlexElement, FlexProps } from '../model/types';

type PolymorphicRef<T extends ElementType> = T extends keyof HTMLElementTagNameMap
    ? Ref<HTMLElementTagNameMap[T]>
    : Ref<never>;

export const Flex = forwardRef(
    <T extends FlexElement = 'div'>(
        {
            as,
            className,
            justify,
            align,
            direction,
            wrap,
            gap,
            fullWidth,
            fullHeight,
            dataTestId = 'Flex',
            children,
            ...rest
        }: FlexProps<T>,
        ref: PolymorphicRef<T>,
    ): ReactElement => {
        const Component = as || 'div';
        const DynamicComponent = Component as ElementType;

        const mods = [
            styles.flex,
            justify && JustifyClasses[justify],
            align && AlignClasses[align],
            direction && DirectionClasses[direction],
            wrap && WrapClasses[wrap],
            gap && GapClasses[gap],
            fullWidth && styles['max-width'],
            fullHeight && styles['max-height'],
            className,
        ];

        return (
            <DynamicComponent
                ref={ref}
                className={clsx(...mods)}
                data-testid={dataTestId}
                {...rest}>
                {children}
            </DynamicComponent>
        );
    },
);

Flex.displayName = 'Flex';
