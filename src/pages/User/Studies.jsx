import { Skeletons } from '@src/components/Skeletons';
import { getItems } from '@src/hooks/LoaderData';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Admin/Layout';

const Studies = () => {
	const [loading, setLoading] = useState('init');
	const [ads, setAds] = useState([]);
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();
		const { StudyCode } = Object.fromEntries(new window.FormData(e.target));
		console.log('ads', ads);
		console.log('StudyCode', StudyCode);
		const exist = ads.find((a) => a.StudyCode === StudyCode);
		if (!exist) return window.alert('Estudio no encontrado');
		navigate(`/estudio/${StudyCode}`);
	};

	const setData = (d) => setAds(d);

	useEffect(() => getItems({ path: '/ads', loading, setLoading, setData }), []);

	return (
		<Layout user>
			<Skeletons on={loading} msg='Cargando'>
				<div className='absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2'>
					<form
						className='flex flex-col items-center gap-6 p-4 text-2xl'
						action=''
						onSubmit={onSubmit}
					>
						<input
							className='p-2 bg-slate-200'
							type='text' placeholder='Código'
							name='StudyCode'
						/>
						<button type='submit' className='btn-upload'>Cargar</button>
					</form>
				</div>
			</Skeletons>
		</Layout>
	);
};

export default Studies;
