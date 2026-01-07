import { Navigate } from 'react-router-dom';
import type { PropsWithChildren } from 'react';
import { useAuth } from '../../store/AuthContext';

export const UnAuthRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const replaceURL = '/';

    return !isAuthenticated ? <>{children}</> : <Navigate to={replaceURL} />;
};
