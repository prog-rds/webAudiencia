import VideoTable from '@src/components/VideoTable';
import { getItems } from '@src/hooks/LoaderData';
import { useEffect, useState } from 'react';
import Layout from './Layout';
import { Skeletons } from '@src/components/Skeletons';

const AdminVideos = () => {
	const [ldVs, setLdVs] = useState('init');
	const [ldVa, setLdVa] = useState('init');
	const [videoStudies, setVideoStudies] = useState([]);
	const [videoAds, setVideoAds] = useState([]);
	const [rowFocused, setRowFocused] = useState([]);
	useEffect(() => getItems({ path: '/videostudies', loading: ldVs, setLoading: setLdVs, setData: svs }), []);
	useEffect(() => getItems({ path: '/videoads', loading: ldVa, setLoading: setLdVa, setData: sva }), []);

	const svs = (data) => {
		console.log(data);
		setLdVs('init');
		setVideoStudies(data);
	};
	const sva = (data) => {
		console.log(data);
		setLdVa('init');
		setVideoAds(data);
	};
	return (
		<Layout>
			<div className='mb-12'>
				<h2 className='md:text-5xl mb-10'>Video estudios</h2>
				<Skeletons on={ldVs} msg='Cargando '>
					<VideoTable
						videoStudies={videoStudies}
						rowFocused={rowFocused}
						setRowFocused={setRowFocused}
						type='0'
					/>
				</Skeletons>
				<h2 className='md:text-5xl mb-10'>Video publicidades</h2>
				<Skeletons on={ldVa} msg='Cargando '>
					<VideoTable
						videoStudies={videoAds}
						rowFocused={rowFocused}
						setRowFocused={setRowFocused}
						type='1'
					/>
				</Skeletons>
			</div>
		</Layout>
	);
};

export default AdminVideos;
