import styles from '../ui/Flex.module.scss';
import type { AlignContent, Direction, Gap, JustifyContent, Wrap } from './types';

export const JustifyClasses: Record<JustifyContent, string> = {
    start: styles['justify-start'],
    center: styles['justify-center'],
    end: styles['justify-end'],
    between: styles['justify-between'],
    around: styles['justify-around'],
    evenly: styles['justify-evenly'],
};

export const AlignClasses: Record<AlignContent, string> = {
    start: styles['align-start'],
    center: styles['align-center'],
    end: styles['align-end'],
    baseline: styles['align-normal'],
    stretch: styles['stretch'],
};

export const DirectionClasses: Record<Direction, string> = {
    row: styles.row,
    column: styles.column,
};

export const GapClasses: Partial<Record<Gap, string>> = {
    '2': styles['gap-2'],
    '4': styles['gap-4'],
    '8': styles['gap-8'],
    '12': styles['gap-12'],
    '14': styles['gap-14'],
    '16': styles['gap-16'],
    '20': styles['gap-20'],
    '24': styles['gap-24'],
    '32': styles['gap-32'],
    '38': styles['gap-38'],
    '120': styles['gap-120'],
};

export const WrapClasses: Partial<Record<Wrap, string>> = {
    wrap: styles.wrap,
    nowrap: styles.nowrap,
    'wrap-reverse': styles['wrap-reverse'],
};
