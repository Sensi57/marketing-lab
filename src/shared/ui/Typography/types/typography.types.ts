import { ElementType, PropsWithChildren } from 'react';

type WeightVariants = 'semmi' | 'bold';
type DecoreVariants = 'outline' | 'midline';
type TypographyTypes = 'h1' | 'h2' | 'h5' | 'p' | 'span';

interface TypographyOwnProps {
    as: ElementType;
    weight: WeightVariants;
    decor: DecoreVariants;
}

export type TypographyProps = PropsWithChildren<TypographyOwnProps>;
