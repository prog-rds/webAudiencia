import { useLogin } from '@src/hooks/useLogin';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '@src/context/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';
import logo from '@src/assets/img/ytlogo.png';

const Login = () => {
	const navigate = useNavigate();
	const { isAuthenticated, login } = useContext(AuthContext);
	const [loadingFetch, setLoadingFetch] = useState('init');

	const onSubmit = (event) => {
		event.preventDefault();
		const query = Object.fromEntries(new window.FormData(event.target));
		if (query.password.length < 8)
			return window.alert('La contraseña debe tener al menos 8 caracteres');
		useLogin({ loadingFetch, setLoadingFetch, query, handleDoneFetch });
	};

	useEffect(() => {
		if (isAuthenticated)
			navigate('/');
	}, [isAuthenticated]);

	const handleDoneFetch = (d) => {
		window.localStorage.setItem('token', d.token);
		window.localStorage.setItem('role', d.user.role);
		window.localStorage.setItem('user', JSON.stringify(d.user));
		window.localStorage.setItem('expire', Date.now() + 1 * 24 * 60 * 60 * 1000);
		console.log('today: ', Date.now(), 'name: ', JSON.parse(window.localStorage.user).name);
		login();
	};
	return (
		<div className='bg-texture bg-cover w-screen h-screen grid place-items-center'>
			<div className='w-12/12 bg flex flex-col md:flex-row'>
				<div className='w-4/12 md:w-3/12 grid place-items-center'>
					<img className='place-items-center pt-12 w-96 md:w-full md:pt-0' src={logo} alt='logo' />
				</div>
				<div>
					<h1 className='text-6xl font-custom text-center mb-8 font-bold'>
						¡Bienvenido al
					</h1>
					<h1 className='text-6xl font-custom text-center mb-8 font-bold'>
						Administrador de publicidad!
					</h1>
					<form
						className='flex flex-col items-center gap-6 p-4 text-2xl'
						action=''
						onSubmit={onSubmit}
					>
						<input
							className='bg-fields-color border-2 outline-fields-color border-fields-color rounded-3xl w-80 h-10 placeholder:text-black  text-black p-4'
							type='text' placeholder='Cedula'
							name='document'
						/>
						<input
							className='bg-fields-color border-2 outline-fields-color border-fields-color rounded-3xl w-80 h-10 placeholder:text-black  text-black p-4'
							type='password' placeholder='Contraseña'
							name='password'
						/>
						<button type='submit' className='bg-transparent text-black font-bold border rounded-3xl px-4 py-2 border-black outline-fields-color '>Ingresar</button>
					</form>
				</div>

			</div>

		</div>
	);
};

export default Login;
