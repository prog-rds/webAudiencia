import React, { useState, useRef, useEffect } from 'react';
import Overlay from '@components/Overlay';
import '@styles/VideoPlayer.css';

function VideoPlayer ({ mainVideoUrl, promoVideoUrl, initPromo, promoDuration }) {
	const container = useRef(null);
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isPlayingPromo, setIsPlayingPromo] = useState(false);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [promoSkipped, setPromoSkipped] = useState(false);
	const [playTime, setPlayTime] = useState(0);

	const handlePlay = () => {
		setIsFullScreen(!isFullScreen);

		if (!isFullScreen || !document.fullscreenElement) {
			const fullscreenApi = 	container.current.requestFullscreen ||
											container.current.webkitRequestFullScreen ||
											container.current.mozRequestFullScreen ||
											container.current.msRequestFullscreen;
			fullscreenApi.call(container.current);
			videoRef.current?.play();
			const timer = setTimeout(() => {
				setIsPlayingPromo(true);
				setPlayTime(initPromo);
			}, initPromo * 1000);
			return () => clearTimeout(timer);
		}
	};

	const handleClick = (e) => e.preventDefault();

	const handleSkip = () => {
		setPromoSkipped(true);
		setIsPlayingPromo(false);
	};

	const handleEnd = () => {
		if (isPlayingPromo) {
			setIsPlayingPromo(false);
			setPromoSkipped(false);
		}
	};

	return (
		<>
			<div className='flex items-center justify-center h-screen'>
				<button className='btn-upload' onClick={handlePlay}>Play</button>
			</div>
			<div ref={container} id='video-container'>
				{isFullScreen && (
					<video
						ref={videoRef}
						src={isPlayingPromo ? promoVideoUrl : `${mainVideoUrl}#t=${playTime}`}
						onPlaying={() => setIsPlaying(true)}
						onEnded={handleEnd}
						onClick={handleClick}
						autoPlay
					/>
				)}
				{
					isPlayingPromo && (
						<Overlay
							isPlaying={isPlaying}
							isFullScreen={isFullScreen}
							promoDuration={promoDuration}
							handleSkip={handleSkip}
							promoSkipped={promoSkipped}
						/>
					)
				}
			</div>

		</>

	);
}

export default VideoPlayer;
