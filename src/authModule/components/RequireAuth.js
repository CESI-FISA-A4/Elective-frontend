import { Navigate } from 'react-router-dom';


const RequireAuth = ({ children, rolesAllowed }) => {
    const roleLabel = localStorage.getItem('roleLabel');

    const authed = rolesAllowed.find((r) => r === roleLabel);

    return authed ? children : <Navigate to="/login" replace />;
}

export default RequireAuth;