import React from 'react';

function AdvertisingCard () {
	return (

		<div className='advertising grid  border-advertising border'>
			<div className='grid-cols-2 bg-advertising font-bold border-advertising border p-2'>
				P1
			</div>
			<div className='border-advertising border-2 p-2'>
				seleccion de publicidad
			</div>
			<div className=' grid grid-cols-SubTableAdvertising border-advertising border'>
				<span className='col-start-1  col-end-1 border-advertising border p-2  '> tipo de entrada </span>
				<span className='col-start-2  col-end-2 border-advertising border p-2 '> 0:00 </span>
			</div>
			<div className='grid grid-cols-SubTableAdvertising border-advertising border-2'>
				<span className=' border-advertising border-2 grid-flow-col p-2 '> duracion del temporizador </span>
				<span className='border-advertising border-2 p-2 '> 0:00 </span>
			</div>
			<div className='bg-colorButtons text-colorButtonsText font-semibold p-2'>
				<button className='w-full cursor-pointer'>editar</button>
			</div>
		</div>
	);
}

export default AdvertisingCard;
