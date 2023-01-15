import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
	const { user } = useSelector((state) => state.auth);
	if (!user) {
		return <Navigate to="/auth/login" />;
	}
	return children;
};

export default PrivateRoute;
