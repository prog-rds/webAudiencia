import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from '@src/pages/Login';
import '@styles/App.css';
import { AuthProvider } from '@src/context/AuthProvider';
import PrivateRoute from '@src/context/PrivateRoute';
import Home from '@src/pages/Home';
import Notfound from '@src/pages/Notfound';
import AdminPanel from '@src/pages/Admin/AdminPanel';
import Studies from '@src/pages/User/Studies';
import ViewStudy from '@src/pages/User/ViewStudy';
import AdminVideos from '@src/pages/Admin/AdminVideos';
import AdminUsers from '@src/pages/Admin/AdminUsers';
import NewUser from '@src/pages/Admin/NewUser';

function App () {
	return (
		<Router className='general'>
			<AuthProvider>
				<Routes>
					<Route path='login' element={<Login />} />
					<Route path='' element={<PrivateRoute />}>
						<Route index element={<Home />} />
						<Route path='estudio' element={<Outlet />}>
							<Route index element={<Studies />} />
							<Route path=':id' element={<ViewStudy />} />
						</Route>
						<Route path='adminpanel' element={<AdminPanel />} />
						<Route path='adminvideos' element={<AdminVideos />} />
						<Route path='adminusers' element={<Outlet />}>
							<Route index element={<AdminUsers />} />
							<Route path='new' element={<NewUser />} />
						</Route>
					</Route>
					<Route path='*' element={<Notfound />} />
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
