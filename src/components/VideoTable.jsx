import React from 'react';
import VideoTableRow from '@components/VideoTableRow';
import VideoUpload from './VideoUpload';

const VideoTable = ({ videoStudies, setVideoStudies, rowFocused, setRowFocused }) => {
	const handleFocused = id => setRowFocused(id);

	const addRow = () => {
		const newVideoStudy = {
			StudyCode: -1,
			VideoName: '',
			Duration: '',
			Link: ''
		};
		setVideoStudies([...videoStudies, newVideoStudy]);
		setRowFocused(-1);
	};

	return (

		<div className=''>
			<div className='flex justify-end'>
				<VideoUpload />
			</div>
			<div className='max-w-full relative overflow-x-auto shadow-md sm:rounded-lg  '>
				<table className=' text-sm text-black table-auto hidden md:block '>
					<thead className='text-xs text-black uppercase '>
						<tr className='border-t border-b'>
							<th scope='col' className='px-6 py-3'>
								Estudio
							</th>
							<th scope='col' className='px-6 py-3'>
								Nombre
							</th>
							<th scope='col' className='px-6 py-3'>
								Duración
							</th>
							<th scope='col' className='px-6 py-3'>
								Link
							</th>
							<th scope='col' className='px-6 py-3  text-center'>
								Acciones
							</th>
						</tr>
					</thead>
					<tbody>
						{
							videoStudies.map((video, index) => (
								<VideoTableRow
									isFocused={rowFocused === video.StudyCode}
									onFocused={() => handleFocused(video.StudyCode)}
									key={video.StudyCode}
									video={video}
									index={index}
								/>
							))
						}
					</tbody>
				</table>
				<div className='md:hidden'>
					{
						videoStudies.map((match, index) => (
							<React.Fragment key={index} />
						))
					}
				</div>
			</div>
		</div>
	);
};

export default VideoTable;
