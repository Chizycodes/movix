import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
	return (
		<div className="bg-[#FFFFFF]">
			<Routes>
				<Route path="/" element={<Auth />} />
				<Route path="/auth" element={<Auth />} />
				{/* <Route path="/dashboard/" element={<VirtualAccount />} /> */}
				{/* <Route path="/dashboard/virtual-account" element={<VirtualAccount />} /> */}

				<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
		</div>
	);
}

export default App;
