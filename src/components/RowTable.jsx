import React, { useEffect, useState } from 'react';
import AdvertisingCard from '@src/components/AdvertisingCard';

function RowTable ({ video, ads }) {
	const [rowAds, setRowAds] = useState([]);

	useEffect(() => {
		const localAds = ads.filter((ad) => ad.StudyCode === video.StudyCode);
		console.log(localAds);
		setRowAds(localAds);
	}, [ads, video]);

	// AdId INTEGER PRIMARY KEY,
	// StudyCode TEXT,  ----------
	// VideoAdId INTEGER, ----------
	// AdEntryTime TEXT,
	// SkipEntryTime TEXT,
	// IsSecundary TEXT,

	return (
		<div className='row flex mb-4 shadow-md'>
			<div className='grid w-2/5 border-advertising border-2 place-items-center'>
				<div className='text-center'> {video.StudyCode} </div>
			</div>
			<div className='grid w-4/5 border-advertising border-2'>
				<div className='text-center  grid grid-cols-3 '>
					{
						rowAds.map((ad) => (
							<AdvertisingCard key={ad.AdId} ad={ad} />
						))
					}
					<AdvertisingCard />
					{/* <AdvertisingCard />
					<AdvertisingCard />
					<AdvertisingCard />
					<AdvertisingCard />
					<AdvertisingCard /> */}
				</div>
			</div>
		</div>
	);
}

export default RowTable;
