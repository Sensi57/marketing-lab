/**
 * @file MainLayout.tsx
 * @description Основной макет приложения с поддержкой светлой/тёмной темы.
 *              Содержит Header и область для маршрутов (Outlet).
 * @author Sensi57
 * @version 1.0.1
 * @date 2025-11-14
 */

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { ErrorBoundary } from '@/app/providers/router';
import styles from './MainLayout.module.scss';
import { useTheme } from '@/app/providers/store/ThemeContext';
import { Header } from '@/widgets/Header';
import { Flex } from '@/shared/ui/Flex/ui/Flex';

const MainLayout = () => {
    const { isTheme = 'light' } = useTheme();

    return (
        <Flex direction="column" className={clsx(styles.w, styles[`w-${isTheme}`])}>
            <Header />
            <main className={styles.content}>
                <ErrorBoundary>
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </main>
        </Flex>
    );
};

export { MainLayout };
