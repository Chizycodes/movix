import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

const AuthLayout = () => {
	const pathname = useLocation().pathname;

	return (
		<div className="w-full flex items-center justify-center min-h-screen text-[#747474]">
			<div className="max-w-[450px] w-full mx-5 border border-mBorder rounded-[10px] px-[1rem] py-[2rem]">
				<Outlet />
			</div>
		</div>
	);
};

const AuthPage = () => {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Signup />} />
				<Route index element={<Login />} />
			</Route>
		</Routes>
	);
};

export default AuthPage;
