import VideoPlayer from '@src/components/VideoPlayer';
import { useParams } from 'react-router-dom';

const ViewStudy = () => {
	const { id } = useParams();
	return (
		<>
			<h1>{id}</h1>
			<VideoPlayer
				// mainVideoUrl={mainVideo}
				// promoVideoUrl={promoVideo}
				initPromo={5}
				promoDuration={5}
			/>
		</>
	);
};

export default ViewStudy;
