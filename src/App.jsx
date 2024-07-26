import { useState } from 'react';
import '@styles/App.css';

function App () {
	const [user, setUser] = useState({
		cedula: '',
		password: ''
	});

	const onSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const cedula = form[0].value;
		const password = form[1].value;
		setUser({
			cedula,
			password
		});
		form.reset();
		console.log(user);
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
				/>
				<input
					className='p-2'
					type='password' placeholder='Contraseña'
				/>
				<button type='submit'>Ingresar</button>
			</form>
		</>
	);
}

export default App;
