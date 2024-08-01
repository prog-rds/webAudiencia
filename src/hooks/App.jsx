import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from '@src/pages/Home';
import HomeAdmin from '@src/pages/Admin/HomeAdmin';
import Usuarios from '@src/pages/Admin/Usuarios';
import NewUser from '@src/pages/Admin/NewUser';
import Notfound from '@src/pages/Notfound';
import Results from '@src/pages/Users/Results';
import Login from '@src/pages/Login';
import Recovery from '@src/pages/Recovery';
import Bets from '@src/pages/Users/Bets';
import Rules from '@src/pages/Users/Rules';
import Statistics from '@src/pages/Users/Statistics';
import NewPasword from '@src/pages/Users/NewPasword';
import { AuthProvider } from '@src/context/AuthProvider.jsx';
import PrivateRoute from '@src/context/PrivateRoute.jsx';
import Loadresults from '@src/pages/Admin/Loadresults';
import ConfigColors from '@src/pages/Admin/ConfigColors';
import ConfigImages from '@src/pages/Admin/ConfigImages';
import ConfigTexts from '@src/pages/Admin/ConfigTexts';
import LoadPhases from './pages/Admin/LoadPhases';
import LoadTeams from './pages/Admin/LoadTeams';

function App () {
	return (
		<Router className='general'>
			<AuthProvider>
				<Routes>
					<Route path='login' element={<Login />} />
					<Route path='recovery' element={<Recovery />} />
					<Route path='' element={<PrivateRoute />}>
						<Route index element={<Home />} />
						<Route path='admin' element={<HomeAdmin />} />
						<Route path='usuarios' element={<Outlet />}>
							<Route index element={<Usuarios />} />
							<Route path='nuevo' element={<NewUser />} />
						</Route>
						<Route path='colores' element={<ConfigColors />} />
						<Route path='imagenes' element={<ConfigImages />} />
						<Route path='textos' element={<ConfigTexts />} />
						<Route path='cargarequipos' element={<LoadTeams />} />
						<Route path='cargarfases' element={<LoadPhases />} />
						<Route path='cargarresultados' element={<Loadresults />} />
						<Route path='pronosticos' element={<Bets />} />
						<Route path='resultados' element={<Results />} />
						<Route path='reglas' element={<Rules />} />
						<Route path='estadisticas' element={<Statistics />} />
						<Route path='nuevacontraseña' element={<NewPasword />} />
					</Route>
					<Route path='*' element={<Notfound />} />
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
