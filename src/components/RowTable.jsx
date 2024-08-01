import React from 'react';
import AdvertisingCard from '@src/components/AdvertisingCard';

function RowTable () {
	return (
		<div className='row flex mb-4 shadow-md'>
			<div className='grid w-2/5 border-advertising border-2 place-items-center'>
				<div className='text-center'> Videos </div>
			</div>
			<div className='grid w-4/5 border-advertising border-2'>
				<div className='text-center  grid grid-cols-3 '>
					<AdvertisingCard />
					<AdvertisingCard />
					<AdvertisingCard />
					<AdvertisingCard />
					<AdvertisingCard />
					<AdvertisingCard />
				</div>
			</div>
		</div>
	);
}

export default RowTable;
