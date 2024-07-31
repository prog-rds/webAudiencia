import HomeUser from '@src/pages/User/HomeUser';
import HomeAdmin from '@src/pages/Admin/HomeAdmin';

const Home = () => {
	const role = window.localStorage.role;
	return (
		role === 'SuperAdmin' || role === 'Administrador'
			? <HomeAdmin />
			: <HomeUser />
	);
};

export default Home;
