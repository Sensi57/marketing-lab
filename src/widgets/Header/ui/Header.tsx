/**
 * @file Header.tsx
 * @description Главный хедер приложения с логотипом, навигацией, переключением темы,
 * корзиной, пользовательским меню и адаптивным бургер-меню для мобильных устройств.
 */

import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { useAuth } from '@/app/providers/store/AuthContext';
import { useTheme } from '@/app/providers/store/ThemeContext';
import { Flex } from '@/shared/ui/Flex/ui/Flex';
import { Button } from '@/shared/ui/Button/ui/Button';
import { Dropdown } from '@/shared/ui/DropList/ui/Dropdown';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

/**
 * @returns {JSX.Element} — компонент хедера
 */
export const Header = (): React.JSX.Element => {
    const { isAuthenticated, logout } = useAuth();
    const { isTheme, changeTheme } = useTheme();

    const [selectedValue, setSelectedValue] = useState<string | undefined>();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const userOptions = [
        { label: 'Profile', value: 'profile' },
        { label: 'Settings', value: 'settings' },
        { label: 'Logout', value: 'logout', onClick: () => logout() },
    ];

    useEffect(() => console.log('isAuthenticated:', isAuthenticated, typeof isAuthenticated), []);

    return (
        <Flex
            as="header"
            justify="between"
            align="center"
            className={clsx(styles.header, styles[`header--${isTheme}`])}
            gap="24">
            {/* Логотип */}
            <div className={styles.brand}>
                <Link to="/" className={styles.brand__text}>
                    Market
                </Link>
                <Link to="/preview">Preview</Link>
            </div>

            {/* Навигация */}
            {/* <nav className={clsx(styles.nav, isMobileMenuOpen && styles['nav--open'])}>
                {navLinks.map((link) => (
                    // <a key={link.title} href={link.href} className={styles.nav__item}>
                    //     {link.title}
                    // </a>
                ))}
            </nav> */}

            {/* Действия справа */}
            <Flex align="center" gap="12" className={styles.actions}>
                {/* Переключатель темы */}
                <Button onClick={changeTheme} variant="ghost" size="m" aria-label="Toggle theme">
                    {isTheme === 'light' ? 'Light' : 'Dark'}
                </Button>

                {/* Дропдаун пользователя */}
                {!isAuthenticated ? (
                    <Dropdown
                        options={userOptions}
                        placeholder="Account"
                        value={selectedValue}
                        onChange={(val) => setSelectedValue(val)}
                        variant="ghost"
                        size="m"
                    />
                ) : (
                    <Button
                        variant="primary"
                        onClick={() => logout()}
                        prefix={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.95"
                                stroke="currentColor"
                                style={{ width: '20px', height: '20px', color: 'white' }}>
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                                />
                            </svg>
                        }>
                        Войти
                    </Button>
                )}

                {/* Бургер-меню  */}
                <div className={styles.burgerWrapper}></div>
            </Flex>
        </Flex>
    );
};

export default Header;
