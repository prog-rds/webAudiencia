import React, { useEffect, useState } from 'react';
import AdvertisingCard from '@src/components/AdvertisingCard';
import { createAd, deleteAd } from '@src/hooks/PostData';

function RowTable ({ video, ads, videoAds }) {
	const [rowAds, setRowAds] = useState([]);
	const [loadingAd, setLoadingAd] = useState('init');

	useEffect(() => {
		const localAds = ads.filter((ad) => ad.StudyCode === video.StudyCode);
		setRowAds(localAds);
	}, [ads, video]);

	const createAdFn = (ad) => {
		ad.StudyCode = video.StudyCode;
		ad.IsSecundary = 'false';
		const body = { ...ad };
		createAd({ loading: loadingAd, setLoading: setLoadingAd, body, handleDonePost });
	};

	const handleDonePost = (_) => {
		setLoadingAd('init');
		window.location.reload();
	};

	const deleteAdFn = (d) => {
		const chk = window.confirm('¿Estás seguro de eliminar esta publicidad?');
		if (chk)
			deleteAd({ id: d.AdId, setLoading: setLoadingAd, handleDonePost });
	};
	return (
		<div className='row flex flex-col  mb-4 shadow-md md:flex-row'>
			<div className='grid w-full md:w-2/5 border-advertising border-2 place-items-center p-2'>
				<div className='text-center text-base break-all flex flex-col'>
					<b>{video.StudyCode}</b>
					<span>({video.Duration})</span>
				</div>
			</div>
			<div className='wfull md:w-4/5 border-advertising border-2'>
				<div className='text-center  grid grid-cols-1 md:grid-cols-3 md:grid-flow-row'>
					{
						rowAds.map((ad, i) => (
							<AdvertisingCard
								index={i}
								key={ad.AdId}
								ad={ad}
								videoAds={videoAds}
								StudyCode={ad.StudyCode}
								deleteAdFn={deleteAdFn}
							/>
						))
					}
					<AdvertisingCard
						createAdFn={createAdFn}
						videoAds={videoAds}
						empty
					/>
				</div>
			</div>
		</div>
	);
}

export default RowTable;

// AdId INTEGER PRIMARY KEY,
// StudyCode TEXT,  ----------
// VideoAdId INTEGER, ----------
// AdEntryTime TEXT,
// SkipEntryTime TEXT,
// IsSecundary TEXT,
