import { Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks/hooks';
export const PublicRoute = ({ children }) => {
    const { status } = useAppSelector(state => state.auth);
    return status === 'authenticated' ? <Navigate to="/"/> :
        <Routes>
        {children}
    </Routes>;
};
//# sourceMappingURL=PublicRoute.jsx.map