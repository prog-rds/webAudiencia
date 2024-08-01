import { Link } from 'react-router-dom';

function Footer () {
	return (
		<div className='bg-footer text-linksFooter font-customFont fixed bottom-0 w-full h-12 flex justify-center align-middle'>
			<Link className='p-3' target='_blank' to='https://reddesignsystems.com/'>Derechos reservados 2024 Red design Sytems</Link>
			<Link className='p-3' to='/reglas'>Politica de servicios o reglas </Link>
		</div>
	);
}

export default Footer;
