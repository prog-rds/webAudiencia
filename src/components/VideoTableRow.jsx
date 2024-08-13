import { deleteVideoStudy, deleteVideoAd } from '@src/hooks/PostData';
import React, { useState } from 'react';

const VideoTableRow = ({ video, type }) => {
	const [ldT, setLdT] = useState('init');
	const iType = parseInt(type);
	const id = ['StudyCode', 'VideoAdId'][iType];
	const deleteFn = [deleteVideoStudy, deleteVideoAd][iType];

	const handleDonePost = (_) => {
		window.location.reload();
	};

	const handleDelete = () => {
		const chk = window.confirm('¿Estás seguro de eliminar este video?');
		if (chk) {
			console.log('Eliminando');
			deleteFn({ id: video[id], loading: ldT, setLoading: setLdT, handleDonePost });
		}
	};

	return (
		<tr className='border-b  text-center hover:bg-gray-300'>
			<td className='break-words px-6 py-4 focus:bg-gray-400 focus:cursor-text focus:text-primary-color'>
				<b>
					{video[id]}
				</b>
			</td>
			{
				type === '1' && (
					<td className='break-words px-6 py-4 focus:bg-gray-400 focus:cursor-text focus:text-primary-color'>
						{video.VideoName}
					</td>
				)
			}
			<td className='break-words px-6 py-4 focus:bg-gray-400 focus:cursor-text focus:text-primary-color'>
				{video.Duration}
			</td>
			<td className='text-blue-600 underline break-words px-6 py-4 focus:bg-gray-400 focus:cursor-text focus:text-primary-color'>
				<a
					href={video.Link}
					target='_blank' rel='noreferrer'
				>Ver vídeo
				</a>
			</td>
			<td className='px-6 py-4 text-right'>
				<button
					className='btns-table'
					onClick={handleDelete}
				>
					Eliminar
				</button>
			</td>
		</tr>
	);
};

export default VideoTableRow;
