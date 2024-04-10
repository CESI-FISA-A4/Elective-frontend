import { Navigate } from 'react-router-dom';


const RequireAuth = ({ children, rolesAllowed=[] }) => {
    const roleLabel = localStorage.getItem('roleLabel');

    let authed = roleLabel !== null;
    
    if(rolesAllowed.length){
        authed = rolesAllowed.find((r) => r === roleLabel) !== undefined;
    }

    return authed ? children : <Navigate to="/login" replace />;
}

export default RequireAuth;