import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '../../../providers/store/ThemeContext';
import { Flex } from '@/shared/ui/Flex/ui/Flex';

import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
    const { isTheme } = useTheme();
    const currentTheme = isTheme || 'light';

    return (
        <Flex
            justify="center"
            align="center"
            className={clsx(styles.wrapper, styles[`wrapper--${currentTheme}`])}>
            <Outlet />
        </Flex>
    );
};

export { AuthLayout };
