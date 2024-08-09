import React, { useState, useRef, useEffect } from 'react';
import Overlay from '@components/Overlay';
import '@styles/VideoPlayer.css';
import { createUserStudy, createInteraction } from '@src/hooks/PostData';
import PlayScreen from './PlayScreen';

// TODO: ordenar los ads por el tiempo de entrada
function VideoPlayer ({ videoStudy, ads }) {
	const container = useRef(null);
	const videoRef = useRef(null);
	const [actualAd, setActualAd] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isPlayingPromo, setIsPlayingPromo] = useState({ 0: false });
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [promoSkipped, setPromoSkipped] = useState({ 0: false });
	const [playTime, setPlayTime] = useState({ 0: 0 });
	const [userStudyId, setUserStudyId] = useState(null);

	useEffect(() => {
		videoRef.current.load();
	}, [videoStudy]);

	const handleDonePost = (data) => {
		setUserStudyId(data.results.lastInsertRowid);
	};

	const handlePlay = () => {
		setIsFullScreen(!isFullScreen);
		const userId = JSON.parse(localStorage.user)._id;
		const date = new Date();
		const StudyDate = (date.toISOString().split('T')[0]).replace(/-/g, '/');
		const StudyTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
		const body = { UserId: userId, StudyCode: videoStudy.StudyCode, StudyDate, StudyTime };
		createUserStudy({ loading: 'init', setLoading: () => {}, body, handleDonePost });
		if (!isFullScreen || !document.fullscreenElement) {
			const fullscreenApi = 	container.current.requestFullscreen ||
											container.current.webkitRequestFullScreen ||
											container.current.mozRequestFullScreen ||
											container.current.msRequestFullscreen;
			fullscreenApi.call(container.current);
			videoRef.current.play();
			videoRef.current.setAttribute('autoplay', '');
			// const timer = [];
			const tempPlayTime = {};
			ads.forEach((ad, index) => {
				tempPlayTime[index] = getInSeconds(ad.AdEntryTime);
			});
			setPlayTime(tempPlayTime);
			LaunchTimer(0);
			// return () => {
			// 	timer.forEach((t) => clearTimeout(t));
			// };
		}
	};
	const LaunchTimer = (t) => {
		const timeNew = t >= ads.length ? 0 : getInSeconds(ads[t].AdEntryTime) * 1000;
		const timeLast = t === 0 ? 0 : getInSeconds(ads[actualAd].AdEntryTime) * 1000;
		const timeLauch = timeNew - timeLast;
		console.log('ohhhhhhhh', timeLauch);
		const timer = setTimeout(() => {
			const idA = t;
			const idB = t + 1;
			console.log('play promo');
			setIsPlayingPromo({ ...isPlayingPromo, [idA]: true, [idB]: false });
		}, timeLauch);
		return () => clearTimeout(timer);
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
		const min = Math.floor(videoRef.current.currentTime / 60);
		const sec = Math.floor(videoRef.current.currentTime % 60);
		const ViewTime = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
		const body = { UserStudyId: userStudyId, AdId: ads[actualAd].AdId, WasSkipped: 'Yes', ViewTime };
		createInteraction({ loading: 'init', setLoading: () => {}, body, handleDonePost: handleDoneInteraction });
		setPromoSkipped({ ...promoSkipped, [actualAd]: true });
		setIsPlayingPromo({ ...isPlayingPromo, [actualAd]: false });
		if (actualAd < ads.length)
			setActualAd(actualAd + 1);
		if (actualAd < ads.length - 1)
			LaunchTimer(actualAd + 1);
	};

	const handleEnd = () => {
		// TODO: Lanzar el launchTimer cuando no se da skip
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
			<div className='flex items-center justify-center h-screen w-full'>
				{
					isFullScreen
						? <button className='btn-upload' onClick={handleBack}>Volver</button>
						: <PlayScreen handlePlay={handlePlay} />
				}
			</div>
			<div ref={container} id='video-container' onContextMenu={(e) => e.preventDefault()} className='video-container'>
				<video
					id='main-video-id'
					ref={videoRef}
					src={isPlayingPromo[actualAd]
						? ads[actualAd].Link
						: `${videoStudy.Link}#t=${playTime[actualAd - 1]}`}
					onPlaying={() => setIsPlaying(true)}
					onEnded={handleEnd}
					onClick={handleClick}
					onPause={handlePause}
					preload='auto'
					height='1px'
					width='1px'
					fetchpriority='high'
				/>
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
