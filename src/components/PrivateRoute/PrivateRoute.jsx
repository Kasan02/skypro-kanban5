import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;

