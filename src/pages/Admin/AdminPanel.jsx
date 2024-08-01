import { useEffect, useState } from 'react';
import RowTable from '@src/components/RowTable';
import Layout from './Layout';
import { getItems } from '@src/hooks/LoaderData';
import { Skeletons } from '@src/components/Skeletons';

const AdminPanel = () => {
	const [ldVs, setLdVs] = useState('init');
	const [ldAds, setLdAds] = useState('init');
	const [ldVa, setLdVa] = useState('init');

	const [videoStudies, setVideoStudies] = useState([]);
	const [videoAds, setVideoAds] = useState([]);
	const [ads, setAds] = useState([]);

	useEffect(() => getItems({ path: '/videostudies', loading: ldVs, setLoading: setLdVs, setData: svs }), []);
	useEffect(() => getItems({ path: '/videoads', loading: ldVa, setLoading: setLdVa, setData: sva }), []);
	useEffect(() => getItems({ path: '/ads', loading: ldAds, setLoading: setLdAds, setData: sAds }), []);

	const svs = (data) => {
		setLdVs('done');
		setVideoStudies(data);
	};
	const sva = (data) => {
		setLdVa('done');
		setVideoAds(data);
	};
	const sAds = (data) => {
		setLdAds('done');
		setAds(data);
	};
	return (
		<Layout>
			<section className='w-full'>
				<h2 className='w-full title-principal'>Panel administrativo</h2>
				<div className='w-10/12 p-6'>
					<div className='header-table'>
						<div className='text-center w-2/5'> Estudios </div>
						<div className='text-center w-4/5'> Publicidades </div>
					</div>
					<Skeletons on={(ldVs === 'done' && ldAds === 'done' && ldVa === 'done') ? 'ok' : ''} msg='Cargando'>
						<div className='body-table '>
							{
								videoStudies.map((video, i) => (
									<RowTable
										key={i}
										video={video}
										videoAds={videoAds}
										ads={ads}
									/>))
							}
						</div>
					</Skeletons>
				</div>
			</section>
		</Layout>
	);
};

export default AdminPanel;
