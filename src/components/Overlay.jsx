import React, { useState, useEffect, useRef } from 'react';
import '@styles/Overlay.css';

function Overlay ({ isPlaying, isFullScreen, promoDuration, handleSkip, promoSkipped }) {
	const [showSkipButton, setShowSkipButton] = useState(false);

	useEffect(() => {
		if (isPlaying && !promoSkipped) {
			const timer = setTimeout(() => {
				setShowSkipButton(true);
			}, promoDuration * 1000);
			return () => clearTimeout(timer);
		}
	}, [isPlaying, promoSkipped, promoDuration]);

	return (
		showSkipButton && (
			<div id='skip-button'>
				<button
					onClick={handleSkip}
				>Skip Ad
				</button>
			</div>
		)
	);
}

export default Overlay;
