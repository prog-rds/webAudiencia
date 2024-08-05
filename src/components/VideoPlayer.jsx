import React, { useState, useRef } from 'react';
import Overlay from '@components/Overlay';
import '@styles/VideoPlayer.css';

function VideoPlayer ({ mainVideoUrl, ads }) {
	const container = useRef(null);
	const videoRef = useRef(null);
	const [actualAd, setActualAd] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isPlayingPromo, setIsPlayingPromo] = useState({ 0: false });// va multiple <---
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [promoSkipped, setPromoSkipped] = useState({ 0: false });// va multiple <---
	const [playTime, setPlayTime] = useState({ 0: 0 });

	const handlePlay = () => {
		setIsFullScreen(!isFullScreen);

		if (!isFullScreen || !document.fullscreenElement) {
			const fullscreenApi = 	container.current.requestFullscreen ||
											container.current.webkitRequestFullScreen ||
											container.current.mozRequestFullScreen ||
											container.current.msRequestFullscreen;
			fullscreenApi.call(container.current);
			videoRef.current?.play();
			const timer = [];
			ads.forEach((ad, index) => {
				timer[index] = setTimeout(() => {
					setPlayTime({ ...playTime, [index]: getInSeconds(ad.AdEntryTime) });
					setIsPlayingPromo({ ...isPlayingPromo, [index]: true, [index + 1]: false });
					console.log('show ad ', index, getInSeconds(ad.AdEntryTime));
				}, getInSeconds(ad.AdEntryTime) * 1000);
			});
			return () => {
				timer.forEach((t) => clearTimeout(t));
			};
		}
	};

	const getInSeconds = (time) => {
		const [minutes, seconds] = time.split(':');
		return parseInt(minutes) * 60 + parseInt(seconds);
	};

	const handleBack = () => {
		const fullscreenApi = 	container.current.requestFullscreen ||
											container.current.webkitRequestFullScreen ||
											container.current.mozRequestFullScreen ||
											container.current.msRequestFullscreen;
		fullscreenApi.call(container.current);
	};

	const handleClick = (e) => e.preventDefault();

	const handleSkip = () => {
		console.log('&&&', playTime);
		setPromoSkipped({ ...promoSkipped, [actualAd]: true });
		setIsPlayingPromo({ ...isPlayingPromo, [actualAd]: false });
		if (actualAd < ads.length - 1)
			setActualAd(actualAd + 1);
	};

	const handleEnd = () => {
		if (isPlayingPromo[actualAd]) {
			setIsPlayingPromo({ ...isPlayingPromo, [actualAd]: false });
			setPromoSkipped({ ...promoSkipped, [actualAd]: false });
		}
	};

	return (
		<>
			<div className='flex items-center justify-center h-screen'>
				{
					isFullScreen
						? <button className='btn-upload' onClick={handleBack}>Volver</button>
						: <button className='btn-upload' onClick={handlePlay}>Play</button>
				}
			</div>
			<div ref={container} id='video-container'>
				{(isFullScreen && ads[actualAd]?.Link && mainVideoUrl.Link) && (
					<video
						ref={videoRef}
						src={isPlayingPromo[actualAd] ? ads[actualAd].Link : `${mainVideoUrl.Link}#t=${23}`}
						onPlaying={() => setIsPlaying(true)}
						onEnded={handleEnd}
						onClick={handleClick}
						autoPlay
					/>
				)}
				{
					isPlayingPromo[actualAd] && (
						<Overlay
							isPlaying={isPlaying}
							isFullScreen={isFullScreen}
							promoDuration={getInSeconds(ads[actualAd].SkipEntryTime)}
							handleSkip={handleSkip}
							promoSkipped={promoSkipped[actualAd]}
						/>
					)
				}
			</div>

		</>

	);
}

export default VideoPlayer;
