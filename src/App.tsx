import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/providers/router/config/router';
import { AuthProvider } from '@/app/providers/store/AuthContext';
import { ThemeProvider } from '@/app/providers/store/ThemeContext';
import { BasketProvider } from '@/app/providers/store/BasketContext';
import '@/app/styles/App.scss';

export const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <BasketProvider>
                    <RouterProvider router={router} />
                </BasketProvider>
            </ThemeProvider>
        </AuthProvider>
    );
};
