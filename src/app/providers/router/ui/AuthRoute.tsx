import { Navigate } from 'react-router-dom';
import type { PropsWithChildren } from 'react';
import { useAuth } from '../../store/AuthContext';

export const AuthRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    const replaceURL = '/auth';

    return isAuthenticated ? <>{children}</> : <Navigate to={replaceURL} />;
};
