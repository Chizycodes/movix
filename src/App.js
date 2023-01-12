import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
	return (
		<div className="bg-[#FFFFFF]">
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="/auth/*" element={<AuthPage />} />

				<Route path="/dashboard/" element={<HomePage />} />

				<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
		</div>
	);
}

export default App;
