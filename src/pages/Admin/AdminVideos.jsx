import VideoTable from '@src/components/VideoTable';
import { getItems } from '@src/hooks/LoaderData';
import { useEffect, useState } from 'react';
import Layout from './Layout';

const AdminVideos = () => {
	const [ldVs, setLdVs] = useState('init');
	const [videoStudies, setVideoStudies] = useState([]);
	const [rowFocused, setRowFocused] = useState([]);
	useEffect(() => getItems({ path: '/videostudies', loading: ldVs, setLoading: setLdVs, setData: setVideoStudies }), []);

	return (
		<Layout>
			<div className='mb-12'>
				<h2 className='md:text-5xl mb-10'>Video estudios</h2>
				<VideoTable
					videoStudies={videoStudies}
					setVideoStudies={setVideoStudies}
					rowFocused={rowFocused}
					setRowFocused={setRowFocused}
				/>
			</div>
		</Layout>
	);
};

export default AdminVideos;
