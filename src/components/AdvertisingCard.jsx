import React, { useEffect, useRef, useState } from 'react';
import '@styles/AdvertisingCard.css';

function AdvertisingCard ({ ad, videoAds, empty, createAdFn, deleteAdFn }) {
	const [advertising, setAdvertising] = useState({});
	const [videoNames, setVideoNames] = useState([]);
	const videoRef = useRef();
	const hour1ref = useRef();
	const min1ref = useRef();
	const hour2ref = useRef();
	const min2ref = useRef();

	const handleChange = (_) => {
		const newAdvertising = { ...advertising };
		newAdvertising.VideoAdId = videoAds.find(va => va.VideoName === videoRef.current.value)?.VideoAdId;
		newAdvertising.AdEntryTime = `${hour1ref.current.value.toString().padStart(2, '0')}:${min1ref.current.value.toString().padStart(2, '0')}`;
		newAdvertising.SkipEntryTime = `${hour2ref.current.value.toString().padStart(2, '0')}:${min2ref.current.value.toString().padStart(2, '0')}`;
		setAdvertising(newAdvertising);
	};

	const handleCreate = () => {
		let valid = false;
		valid = videoRef.current.value !== 'Selección de publicidad';
		valid = valid && hour1ref.current.value !== '';
		valid = valid && min1ref.current.value !== '';
		valid = valid && hour2ref.current.value !== '';
		valid = valid && min2ref.current.value !== '';
		if (!valid) {
			window.alert('Debes llenar todos los campos');
			return;
		}
		createAdFn(advertising);
	};

	const handleDelete = () => {
		deleteAdFn(ad);
	};

	const defaultVideo = () => {
		if (empty) return 'Selección de publicidad';
		return videoNames[1];
		// return videoAds.find(va => va.VideoAdId === ad.VideoAdId)?.VideoName;
	};

	useEffect(() => {
		const initVa = videoAds.map(v => v.VideoName);
		initVa.unshift('Selección de publicidad');
		setVideoNames(initVa);
	}, []);

	useEffect(() => {
		if (!empty) {
			videoRef.current.value = videoAds.find(va => va.VideoAdId === ad.VideoAdId)?.VideoName;
			setAdvertising(ad);
		}
	}, [videoNames]);

	return (
		<div className='advertising grid  border-advertising border'>
			<div className='grid-cols-2 bg-advertising font-bold border-advertising border p-2'>
				Publicidad
			</div>
			<select
				name='video' ref={videoRef}
				className='border-advertising border-2 p-2 text-sm  text-black h-10 outline-transparent disabled:appearance-none'
				defaultValue={(!empty && videoAds.find(va => va.VideoAdId === ad.VideoAdId)?.VideoName) || videoNames[0]}
				onChange={handleChange}
				disabled={!empty}
			>
				{
					videoNames?.map((va, id) =>
						<option
							className='bg-white/50 text-gray-950'
							hidden={id === 0} key={va}
							value={va}
						>{va}
						</option>)
				}
			</select>
			<div className=' grid grid-cols-SubTableAdvertising border-advertising border'>
				<span className='col-start-1  col-end-1 border-advertising border p-2  text-sm'> Entrada publicidad </span>
				<span className='border-advertising border-2  flex'>
					<input
						ref={hour1ref} className='w-full text-center disabled:appearance-none disabled:bg-gray-200 p-2'
						value={advertising.AdEntryTime?.split(':')[0] || ''}
						type='number' min='0' max='59' onChange={handleChange}
						disabled={!empty}
					/>
					<div className={`flex items-center h-full ${empty ? '' : 'bg-gray-200'}`}>
						<b>:</b>
					</div>
					<input
						ref={min1ref} className='w-full text-center disabled:appearance-none disabled:bg-gray-200'
						value={advertising.AdEntryTime?.split(':')[1] || ''}
						type='number' min='0' max='59' onChange={handleChange}
						disabled={!empty}
					/>
				</span>
			</div>
			<div className='grid grid-cols-SubTableAdvertising border-advertising border-2'>
				<span className=' border-advertising border-2 grid-flow-col p-2 text-sm'> Entrada para omitir </span>
				<span className='border-advertising border-2  flex'>
					<input
						ref={hour2ref} className='w-full text-center disabled:appearance-none disabled:bg-gray-200 p-2'
						value={advertising.SkipEntryTime?.split(':')[0] || ''}
						type='number' min='0' max='59' onChange={handleChange}
						disabled={!empty}
					/>
					<div className={`flex items-center h-full ${empty ? '' : 'bg-gray-200'}`}>
						<b>:</b>
					</div>
					<input
						ref={min2ref} className='w-full text-center disabled:appearance-none disabled:bg-gray-200'
						value={advertising.SkipEntryTime?.split(':')[1] || ''}
						type='number' min='0' max='59' onChange={handleChange}
						disabled={!empty}
					/>

				</span>
			</div>
			<div className=' text-colorButtonsText font-semibold'>
				{
					empty
						? <button onClick={handleCreate} className='bg-gray-700 w-full cursor-pointer p-2'>Crear</button>
						: <button onClick={handleDelete} className='bg-colorButtons w-full cursor-pointer p-2'>Eliminar</button>
				}
			</div>
		</div>
	);
}

export default AdvertisingCard;
