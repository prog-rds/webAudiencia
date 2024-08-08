import VideoPlayer from '@src/components/VideoPlayer';
import { getItems } from '@src/hooks/LoaderData';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Skeletons } from '@src/components/Skeletons';

const ViewStudy = () => {
	const { id } = useParams();
	const [ldVs, setLdVs] = useState('init');
	const [ldVa, setLdVa] = useState('init');
	const [ldAds, setLdAds] = useState('init');

	const [videoStudy, setVideoStudy] = useState(null);
	const [videoAds, setVideoAds] = useState(null);
	const [ads, setAds] = useState(null);
	useEffect(() => getItems({ path: `/videostudies/${id}`, loading: ldVs, setLoading: setLdVs, setData: svs }), [id]);
	useEffect(() => getItems({ path: '/videoads', loading: ldVa, setLoading: setLdVa, setData: sva }), []);

	useEffect(() => {
		if (ldVa === 'done' && ldVs === 'done' && ldAds === 'init')
			getItems({ path: '/ads', loading: ldAds, setLoading: setLdAds, setData: sAds });
	}, [ldVa, ldVs]);

	const sAds = (data) => {
		const realAds = data.filter((a) => a.StudyCode === id);
		// include de link of the videoAds into the realAds
		realAds.forEach((ra) => {
			const va = videoAds.find((v) => v.VideoAdId === ra.VideoAdId);
			ra.Link = va?.Link;
			ra.Duration = va?.Duration;
		});
		console.log('ads ->', realAds);
		setLdAds('done');
		setAds(realAds);
	};

	const svs = (data) => {
		// console.log('videoStudy: ', data);
		setLdVs('done');
		setVideoStudy(data);
	};

	const sva = (data) => {
		// console.log('VideoAds: ', data);
		setLdVa('done');
		setVideoAds(data);
	};

	return (
		<>
			<Skeletons on={ads && videoStudy ? 'ok' : ''} msg='Cargando'>
				<VideoPlayer
					videoStudy={videoStudy}
					ads={ads}
					// initPromo={5}
					// promoDuration={5}
				/>
			</Skeletons>
		</>
	);
};

export default ViewStudy;
