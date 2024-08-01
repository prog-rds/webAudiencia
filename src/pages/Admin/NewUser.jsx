import { createUser } from '@src/hooks/PostData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const NewUser = () => {
	const [userData, setUserData] = useState('');
	const [loadingUser, setLoadingUser] = useState('init');

	const currName = userData.UserName;
	const currDocument = userData.Document;
	const optionsRole = ['Selecciona un Rol', 'Administrador', 'Usuario'];
	const navigate = useNavigate();

	const handleDonePost = (_) => {
		navigate('/adminusers');
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setUserData((prev) => ({ ...prev, [name]: value }));
	};

	const setRandomPassword = (e) => {
		e.preventDefault();
		const randomPassword = Math.random().toString(36).slice(2, 17);
		window.dePass.value = randomPassword;
		setUserData((prev) => ({ ...prev, Pass: randomPassword }));
	};

	const validations = () => {
		if (!userData.UserName || userData.UserName === '') {
			window.alert('El nombre del usuario no puede estar vacío');
			return false;
		}
		if (!userData.Document || userData.Document === '' || userData.Document.length < 6) {
			window.alert('El Documento no puede estar vacío o tener menos de 6 caracteres');
			return false;
		}
		if (!userData.Pass || userData.Pass === '') {
			window.alert('La contraseña no puede estar vacía');
			return false;
		}
		if (userData.Pass.length < 8) {
			window.alert('La contraseña debe tener al menos 8 caracteres');
			return false;
		}
		if (!userData.UserRole || userData.UserRole === '') {
			window.alert('El Rol no puede estar vacío');
			return false;
		}
		return true;
	};

	const saveUser = () => {
		const body = { ...userData };
		createUser({ loading: loadingUser, setLoading: setLoadingUser, body, handleDonePost });
	};

	const trySave = (e) => {
		e.preventDefault();
		console.log('userData:', userData);
		validations() && saveUser();
	};
	return (
		<Layout>
			<div className='relative overflow-x-auto shadow-md sm:rounded-lg p-4'>
				<form className='grid place-items-center w-12/12' onSubmit={trySave}>
					<input
						className='bg-fields-color border-2 outline-white border-white rounded-3xl w-80 h-10 placeholder:text-white  text-white p-4'
						placeholder='Nombre' name='UserName' type='text'
						value={currName || ''} onChange={handleChange}
					/>
					<div className='py-3' />
					<input
						className=' bg-fields-color border-2 outline-white border-white rounded-3xl w-80 h-10 placeholder:text-white  text-white p-4'
						placeholder='Documento' name='Document' type='text'
						value={currDocument || ''} onChange={handleChange}
					/>
					<div className='py-3' />
					<div className='py-3' />
					<select
						name='UserRole'
						className='bg-fields-color border border-gray-300 outline-white text-white rounded-3xl w-80 h-10  focus:ring-blue-500 focus:border-blue-500 block p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500'
						defaultValue={optionsRole.find(o => o === userData.UserRole) || optionsRole[0]} onChange={handleChange}
					>
						{
							optionsRole.map((el, id) => <option className='bg-white/50 text-gray-950' disabled={id === 0} key={el} value={el}>{el}</option>)
						}
					</select>
					<div className='py-3' />
					<input
						value={userData.Pass || ''}
						className=' bg-fields-color border-2 outline-white border-white rounded-3xl w-80 h-10 placeholder:text-white  text-white p-4'
						type='text' placeholder='Contraseña' name='Pass' id='dePass' onChange={handleChange}
					/>
					<button className='btns hover:bg-hover' onClick={setRandomPassword}>
						Generar Contraseña
					</button>
					<div className='py-3' />
					<button className='btns hover:bg-hover' type='submit'>
						Crear Usuario
					</button>
				</form>
			</div>
		</Layout>
	);
};

export default NewUser;
