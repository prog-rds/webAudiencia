import { Skeletons } from '@src/components/Skeletons';
import { getItems } from '@src/hooks/LoaderData';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Studies = () => {
	const [loading, setLoading] = useState('init');
	const [ads, setAds] = useState([]);
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();
		const { StudyCode } = Object.fromEntries(new window.FormData(e.target));
		const exist = ads.find((a) => a.StudyCode === StudyCode);
		if (!exist) return window.alert('Estudio no encontrado');
		navigate(`./${StudyCode}`);
	};

	const setData = (d) => setAds(d);

	useEffect(() => getItems({ path: '/ads', loading, setLoading, setData }), []);

	return (
		<Skeletons on={loading} msg='Cargando'>
			<form
				className='flex flex-col items-center gap-6 p-4 text-2xl'
				action=''
				onSubmit={onSubmit}
			>
				<input
					className='p-2'
					type='text' placeholder='Código'
					name='StudyCode'
				/>
				<button type='submit'>Cargar</button>
			</form>
		</Skeletons>
	);
};

export default Studies;
