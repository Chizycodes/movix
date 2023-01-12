import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

function App() {
	return (
		<div className="bg-[#FFFFFF]">
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="/auth/*" element={<AuthPage />} />
				{/* <Route path="/dashboard/" element={<VirtualAccount />} /> */}
				{/* <Route path="/dashboard/virtual-account" element={<VirtualAccount />} /> */}

				<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
		</div>
	);
}

export default App;
