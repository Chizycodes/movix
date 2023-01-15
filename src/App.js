import { Route, Routes } from 'react-router-dom';
import Footer from './components/home/Footer';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './redux/auth/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import PrivateRoute from './routes/PrivateRoute';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			const user = {
				email: currentUser.email,
				displayName: currentUser.displayName,
			};
			dispatch(setUser(user));
		});
	}, []);
	return (
		<div className="bg-[#FFFFFF]">
			<ToastContainer position="top-right" theme="colored" />
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="/auth/*" element={<AuthPage />} />

				<Route
					path="/movies/"
					element={
						<PrivateRoute>
							<HomePage />
							<Footer />
						</PrivateRoute>
					}
				/>

				<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
		</div>
	);
}

export default App;
