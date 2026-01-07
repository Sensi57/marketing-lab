import { TypographyProps } from '../types/typography.types';
import styles from './Typography.module.scss';

const Typography = ({ as = 'p', weight, children, ...rest }: TypographyProps) => {
    const Component: React.ElementType = as;
    const mods = [styles.font, styles[`font-${as}`], styles[`$font-weight--${weight}}`]];

    return (
        <Component className={...mods} {...rest}>
            {children}
        </Component>
    );
};

export default Typography;
