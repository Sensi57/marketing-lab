import { createBrowserRouter } from 'react-router-dom';
import { AuthRoute, UnAuthRoute } from '..';
import { AuthLayout, MainLayout } from '@/app/layouts';
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
