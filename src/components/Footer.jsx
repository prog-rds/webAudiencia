import { Link } from 'react-router-dom';

function Footer () {
	const closeSession = () => {
		window.localStorage.clear();
		window.location.href = '/login';
	};
	return (
		<footer className='bg-footer text-linksFooter font-customFont fixed bottom-0 w-full h-12 flex justify-center align-middle'>
			<Link className='p-3' target='_blank' to='https://reddesignsystems.com/'>Derechos reservados 2024 Red design Sytems</Link>
			<button onClick={closeSession}>Cerrar sesion</button>
		</footer>
	);
}

export default Footer;
