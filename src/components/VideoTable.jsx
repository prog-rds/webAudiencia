import React from 'react';
import VideoTableRow from '@components/VideoTableRow';
import VideoUpload from './VideoUpload';

const VideoTable = ({ videoStudies, rowFocused, setRowFocused, type }) => {
	const handleFocused = id => setRowFocused(id);
	const iType = parseInt(type);
	const id = ['StudyCode', 'VideoAdId'][iType];
	const column1 = ['Estudio', 'Publicidad'][iType];

	return (

		<div className=''>
			<div className='flex justify-end'>
				<VideoUpload type={type} />
			</div>
			<div className='max-w-full relative overflow-x-auto shadow-md sm:rounded-lg  '>
				<table className=' text-sm text-black table-auto hidden md:block '>
					<thead className='text-xs text-black uppercase '>
						<tr className='border-t border-b'>
							<th scope='col' className='px-6 py-3'>
								{column1}
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
							videoStudies.map((video) => (
								<VideoTableRow
									isFocused={rowFocused === video[id]}
									onFocused={() => handleFocused(video[id])}
									key={video[id]}
									video={video}
									type={type}
								/>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default VideoTable;
