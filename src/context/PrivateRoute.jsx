import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '@src/context/AuthProvider.jsx';

const PrivateRoute = () => {
	const { isAuthenticated } = useContext(AuthContext);

	return isAuthenticated
		? <Outlet />
		: <Navigate to='/login' />;
};

export default PrivateRoute;
