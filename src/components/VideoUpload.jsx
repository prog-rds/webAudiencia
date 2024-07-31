import React, { useState } from 'react';

function VideoUpload () {
	const [video, setVideo] = useState(null);

	const handleVideoChange = (event) => {
		setVideo(event.target.files[0]);
	};

	const handleUpload = async () => {
		if (!video) return;

		const formData = new FormData();
		formData.append('video', video);
		const uri = import.meta.env.VITE_API_URI;
		const headers = new Headers({
			Authorization: `Bearer ${window.localStorage.token}`
		// 'Content-Type': 'multipart/form-data'
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
		}
	};

	return (
		<div>
			<input type='file' accept='video/mp4' onChange={handleVideoChange} />
			<button onClick={handleUpload}>Upload Video</button>
		</div>
	);
}

export default VideoUpload;
