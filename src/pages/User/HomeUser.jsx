import VideoPlayer from '@src/components/VideoPlayer';
import mainVideo from '@src/assets/videos/video1.mp4';
import promoVideo from '@src/assets/videos/promo1.mp4';
const HomeUser = () => {
	return (
		// Esto es un test!!!!!!!!!!!!!!!!
		<VideoPlayer
			mainVideoUrl={mainVideo}
			promoVideoUrl={promoVideo}
			initPromo={5}
			promoDuration={5}
		/>
		// Esto es un test!!!!!!!!!!!!!!!!
	);
};

export default HomeUser;
