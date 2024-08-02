import React, { useEffect, useState } from 'react';
import { Skeletons } from './Skeletons';

function VideoUpload ({ type }) {
	const [video, setVideo] = useState(null);
	const [videoDuration, setVideoDuration] = useState(0);
	const [loading, setLoading] = useState('init');

	const handleVideoChange = (event) => {
		console.log(event.target.files[0]);
		setVideo(event.target.files[0]);
	};

	useEffect(() => {
		if (!video) return;
		const tagVideo = document.createElement('video');
		tagVideo.preload = 'metadata';
		tagVideo.onloadedmetadata = () => {
			const minutes = Math.floor(tagVideo.duration / 60);
			const seconds = Math.floor(tagVideo.duration % 60).toString().padStart(2, '0');
			const formattedDuration = `${minutes}:${seconds}`;
			setVideoDuration(formattedDuration);
		};
		tagVideo.src = URL.createObjectURL(video);
	}, [video]);

	const handleUpload = async () => {
		setLoading('loading');
		if (!video) return;
		console.log('video', video);
		const formData = new FormData();
		formData.append('video', video);
		formData.append('duration', videoDuration);
		formData.append('type', type);
		const uri = import.meta.env.VITE_API_URI;
		const headers = new Headers({
			Authorization: `Bearer ${window.localStorage.token}`
		});
		try {
			const response = await fetch(`${uri}/assets`, {
				method: 'POST',
				body: formData,
				headers
			});

			if (!response.ok)
				throw new Error('Failed to upload video');

			console.log('Video uploaded successfully!');
		} catch (error) {
			console.error(error);
		} finally {
			setLoading('init');
			setVideo(null);
			window.location.reload();
		}
	};

	return (
		<>
			<div className='file-uploader btns mb-5 flex items-center'>

				<div className='mr-3 text-2xl font-semibold '>Nuevo: </div>

				{
					video
						? (
							<Skeletons on={loading} msg='Subiendo'>
								<span className='mx-3 '>{video.name}</span>
								<button className='btn-upload' onClick={handleUpload}>SUBIR</button>
							</Skeletons>
						)
						: (
							<>
								<input id='file-input' type='file' accept='video/mp4' onChange={handleVideoChange} />
								<label htmlFor='file-input'>
									<div className='btn-upload btns'> Choose your file </div>
								</label>
							</>
						)
				}
			</div>
		</>
	);
}

export default VideoUpload;
