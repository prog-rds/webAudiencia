import HomeAdmin from '@src/pages/Admin/HomeAdmin';
import Studies from './User/Studies';

const Home = () => {
	const role = window.localStorage.role;
	return (
		role === 'SuperAdmin' || role === 'Administrador'
			? <HomeAdmin />
			: <Studies />
	);
};

export default Home;
