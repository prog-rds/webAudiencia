import { useLogin } from '@src/hooks/useLogin';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '@src/context/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';

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
		<>
			<h1
				className='text-6xl font-custom text-center mb-8'
			>Bienvenido
			</h1>
			<form
				className='flex flex-col items-center gap-6 p-4 text-2xl'
				action=''
				onSubmit={onSubmit}
			>
				<input
					className='p-2'
					type='text' placeholder='Cedula'
					name='document'
				/>
				<input
					className='p-2'
					type='password' placeholder='Contraseña'
					name='password'
				/>
				<button type='submit'>Ingresar</button>
			</form>
		</>
	);
};

export default Login;
