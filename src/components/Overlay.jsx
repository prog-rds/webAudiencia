import React, { useState, useEffect } from 'react';
import '@styles/Overlay.css';

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
					className='text-xl'
					onClick={handleSkip}
				>Omitir
				</button>
			</div>
		)
	);
}

export default Overlay;
