import React, { createContext, useContext, useState, useEffect } from 'react';

type Themes = 'light' | 'dark';

interface ThemeContextType {
    isTheme: Themes;
    changeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [isTheme, setIsTheme] = useState<Themes>('light');

    useEffect(() => {
        // Проверка на сохраненную тему в localStorage
        const storedTheme = localStorage.getItem('theme') as Themes | null;
        if (storedTheme) {
            setIsTheme(storedTheme);
        } else {
            // Если темы в localStorage нет, используем системную настройку
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsTheme(mediaQuery.matches ? 'dark' : 'light');
        }

        // Слушаем изменения системной темы
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('theme')) {
                setIsTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);

        // Очистка при размонтировании компонента
        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, []);

    // Переключение темы вручную
    const changeTheme = () => {
        const nextTheme = isTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', nextTheme);
        setIsTheme(nextTheme);
    };

    // Динамически добавляем атрибут data-theme на body для текущей темы
    useEffect(() => {
        document.body.setAttribute('data-theme', isTheme);
    }, [isTheme]);

    return (
        <ThemeContext.Provider value={{ isTheme, changeTheme }}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};
