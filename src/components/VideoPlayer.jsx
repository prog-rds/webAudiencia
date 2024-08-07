import React, { useState, useRef, useEffect } from 'react';
import Overlay from '@components/Overlay';
import '@styles/VideoPlayer.css';
import { createUserStudy, createInteraction } from '@src/hooks/PostData';

function VideoPlayer ({ videoStudy, ads }) {
	const container = useRef(null);
	const videoRef = useRef(null);
	const [actualAd, setActualAd] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isPlayingPromo, setIsPlayingPromo] = useState({ 0: false });// va multiple <---
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [promoSkipped, setPromoSkipped] = useState({ 0: false });// va multiple <---
	const [playTime, setPlayTime] = useState({ 0: 0 });
	const [userStudyId, setUserStudyId] = useState(null);

	useEffect(() => {
		videoRef.current.load();
	}, [videoStudy]);

	const handleDonePost = (data) => {
		// console.log('--- userStudy: --- \n', data.results.lastInsertRowid);
		setUserStudyId(data.results.lastInsertRowid);
	};

	const handlePlay = () => {
		setIsFullScreen(!isFullScreen);
		const userId = JSON.parse(localStorage.user)._id;
		const date = new Date();
		const StudyDate = (date.toISOString().split('T')[0]).replace(/-/g, '/');
		const StudyTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
		const body = { UserId: userId, StudyCode: videoStudy.StudyCode, StudyDate, StudyTime };
		// loading, setLoading, body, handleDonePost
		createUserStudy({ loading: 'init', setLoading: () => {}, body, handleDonePost });
		if (!isFullScreen || !document.fullscreenElement) {
			const fullscreenApi = 	container.current.requestFullscreen ||
											container.current.webkitRequestFullScreen ||
											container.current.mozRequestFullScreen ||
											container.current.msRequestFullscreen;
			fullscreenApi.call(container.current);
			videoRef.current.play();
			videoRef.current.setAttribute('autoplay', '');
			const timer = [];
			const tempPlayTime = {};
			ads.forEach((ad, index) => {
				tempPlayTime[index] = getInSeconds(ad.AdEntryTime);
				// setPlayTime({ ...playTime, [index]: getInSeconds(ad.AdEntryTime) });
				timer[index] = setTimeout(() => {
					setIsPlayingPromo({ ...isPlayingPromo, [index]: true, [index + 1]: false });
					console.log('show ad ', index, getInSeconds(ad.AdEntryTime));
				}, getInSeconds(ad.AdEntryTime) * 1000);
			});
			setPlayTime(tempPlayTime);
			console.log('playTime: ', tempPlayTime);
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

	const handleDoneInteraction = (data) => {
		// console.log('--- interaction: --- \n', data);
	};

	const handleSkip = () => {
		// videoRef.current.pause(); ???
		console.log('-- PLAYTIME --', playTime);
		const min = Math.floor(videoRef.current.currentTime / 60);
		const sec = Math.floor(videoRef.current.currentTime % 60);
		const ViewTime = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
		// console.log('ViewTime: ', ViewTime);
		const body = { UserStudyId: userStudyId, AdId: ads[actualAd].AdId, WasSkipped: 'Yes', ViewTime };
		createInteraction({ loading: 'init', setLoading: () => {}, body, handleDonePost: handleDoneInteraction });
		// console.log('LLEVAAA: ', videoRef.current.currentTime);
		setPromoSkipped({ ...promoSkipped, [actualAd]: true });
		setIsPlayingPromo({ ...isPlayingPromo, [actualAd]: false });
		if (actualAd < ads.length)
			setActualAd(actualAd + 1);
	};

	const handleEnd = () => {
		if (isPlayingPromo[actualAd]) {
			const min = ads[actualAd].Duration.split(':')[0];
			const sec = ads[actualAd].Duration.split(':')[1];
			const ViewTime = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
			const body = { UserStudyId: userStudyId, AdId: ads[actualAd].AdId, WasSkipped: 'No', ViewTime };

			createInteraction({ loading: 'init', setLoading: () => {}, body, handleDonePost: handleDoneInteraction });

			setIsPlayingPromo({ ...isPlayingPromo, [actualAd]: false });
			setPromoSkipped({ ...promoSkipped, [actualAd]: false });
		}
	};
	const handlePause = () => {
		console.log('paused');
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
			<div ref={container} id='video-container' onContextMenu={(e) => e.preventDefault()} className='video-container'>
				<video
					id='main-video-id'
					ref={videoRef}
					// src={isPlayingPromo[actualAd] ? ads[actualAd].Link : `${videoStudy.Link}`}
					src={isPlayingPromo[actualAd] ? ads[actualAd].Link : `${videoStudy.Link}#t=${playTime[actualAd - 1]}`}
					onPlaying={() => setIsPlaying(true)}
					onEnded={handleEnd}
					onClick={handleClick}
					onPause={handlePause}
					preload='auto'
				/>

				{
					isPlayingPromo[actualAd] && (
						// TODO: probar poner video de ad dentro del overlay
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
