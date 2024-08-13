import React, { useState, useEffect } from 'react';
import '@styles/Overlay.css';
import SkipIcon from './SkipIcon';

function Overlay ({ isPlaying, isFullScreen, promoDuration, handleSkip, promoSkipped }) {
	const [showSkipButton, setShowSkipButton] = useState(false);

	useEffect(() => {
		if (isPlaying && !promoSkipped) {
			const timer = setTimeout(() => {
				setShowSkipButton(true);
				console.log('show skip ');
			}, promoDuration * 1000);
			return () => clearTimeout(timer);
		}
	}, [isPlaying, promoSkipped, promoDuration]);

	return (
		showSkipButton && (
			<div id='skip-button'>
				<button
					className='text-xl text-white rounded-3xl flex flex-row items-center bg-opacity-60 hover:bg-opacity-100 bg-black pl-4 pr-4 py-2'
					onClick={handleSkip}
				>
					<div className='inline-block align-middle'>
						Omitir
					</div>
					<span className='h-9 w-9'>
						<SkipIcon />
					</span>
				</button>
			</div>
		)
	);
}

export default Overlay;
