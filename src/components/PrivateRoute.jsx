import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isAuth }) {
   return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;
