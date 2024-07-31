import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@src/pages/Login';
import '@styles/App.css';
import { AuthProvider } from '@src/context/AuthProvider';
import PrivateRoute from '@src/context/PrivateRoute';
import Home from '@src/pages/Home';
import Notfound from '@src/pages/Notfound';
import AdminPanel from '@src/pages/Admin/AdminPanel';

function App () {
	return (
		<Router className='general'>
			<AuthProvider>
				<Routes>
					<Route path='login' element={<Login />} />
					<Route path='' element={<PrivateRoute />}>
						<Route index element={<Home />} />
						<Route path='adminpanel' element={<AdminPanel />} />
					</Route>
					<Route path='*' element={<Notfound />} />
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
