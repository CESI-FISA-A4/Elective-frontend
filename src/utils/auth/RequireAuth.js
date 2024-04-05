import { Navigate } from 'react-router-dom';


const RequireAuth = ({ children, rolesAllowed }) => {
    const userRole = localStorage.getItem("roleLabel");
  
    const authed = rolesAllowed.find((r) => userRole === r);
    
    return authed ? children : <Navigate to="/login" replace />;
  }

  export default RequireAuth;