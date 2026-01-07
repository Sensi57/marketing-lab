import { Outlet, createBrowserRouter } from 'react-router-dom';
import { AuthRoute, UnAuthRoute } from '..';
import { AuthLayout, MainLayout } from '@/app/layouts';
import Market from '@/pages/market/Market';
import LoginPage from '@/pages/authentication/login/LoginPage';
import Preview from '@/pages/preview/Preview';
import { ROUTES } from '@/shared/config/routes';
import { LoginForm } from '@/entities/auth/ui/login';

export const router = createBrowserRouter([
    {
        path: ROUTES.mainRoute,
        element: (
            <AuthRoute>
                <MainLayout />
            </AuthRoute>
        ),
        children: [
            {
                index: true,
                element: <Market />,
            },
            {
                path: ROUTES.preview.route,
                element: <Preview />,
            },
        ],
    },
    // {
    //     path: ROUTES.preview.route,
    //     element: <Preview />, // Если Preview самостоятельный маршрут
    // },
    {
        path: '/auth',
        element: (
            <UnAuthRoute>
                <AuthLayout />
            </UnAuthRoute>
        ),
        children: [
            {
                index: true,
                element: <LoginForm />,
            },
        ],
    },
]);
