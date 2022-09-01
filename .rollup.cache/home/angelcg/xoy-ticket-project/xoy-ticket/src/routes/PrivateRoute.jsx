import { Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks/hooks';
export const PrivateRoute = ({ children }) => {
    const { status } = useAppSelector(state => state.auth);
    return status === 'authenticated' ?
        <Routes>
        {children}
    </Routes> : <Navigate to="/login"/>;
};
//# sourceMappingURL=PrivateRoute.jsx.map