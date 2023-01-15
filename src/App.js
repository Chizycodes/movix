import { Route, Routes } from 'react-router-dom';
import Footer from './components/home/Footer';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className="bg-[#FFFFFF]">
			<ToastContainer position="top-right" theme="colored" />
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="/auth/*" element={<AuthPage />} />

				<Route
					path="/dashboard/"
					element={
						<>
							<HomePage />
							<Footer />
						</>
					}
				/>

				<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
		</div>
	);
}

export default App;
