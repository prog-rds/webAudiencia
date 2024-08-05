import React from 'react';

function CardReport () {
	return (
		<div>
			<div className='flex header-table rounded-tl-none'>
				<div className='bg-headerTable text-center p-2 w-1/2'>
					video  1
				</div>
			</div>
			<div className='grid'>
				<div className='grid grid-cols-2 '>
					<span className=' p-2 border border-black text-center'> Publicidad 1</span>
					<span className=' p-2 border border-black text-center'> Publicidad 2</span>
				</div>
				<div className=' p-2 text-center border border-black'>
					00/00/00
				</div>
				<div className=' p-2 text-center border border-black'>
					00:25
				</div>
				<div className='grid grid-cols-2  '>
					<span className=' p-2 border border-black text-center'>00.00</span>
					<span className=' p-2 border border-black text-center'> 00.00</span>
				</div>
				<div className='grid grid-cols-2 '>
					<span className=' p-2 border border-black text-center'>00.00</span>
					<span className=' p-2 border border-black text-center'> 00.00</span>
				</div>
				<div className='grid grid-cols-2 '>
					<span className=' p-2 border border-black text-center'>si</span>
					<span className=' p-2 border border-black text-center'>no</span>
				</div>
			</div>
		</div>
	);
}

export default CardReport;
