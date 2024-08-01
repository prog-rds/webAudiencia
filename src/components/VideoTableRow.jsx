import { deleteVideoStudy } from '@src/hooks/PostData';
import React, { useEffect, useRef, useState } from 'react';

const VideoTableRow = ({ video, onFocused, isFocused }) => {
	const [rowState, setRowState] = useState(null);
	const [initial, setInitial] = useState([]);
	const [actualVideo, setActualVideo] = useState(video);
	const [ldT, setLdT] = useState('init');

	const input1 = useRef();
	const input2 = useRef();
	const input3 = useRef();
	const handleDonePost = (_) => unFocus(true);

	useEffect(() => {
		if (!isFocused) unFocus(false);
	}, [isFocused]);

	const unFocus = (onDB) => {
		if (onDB) {
			setInitial([input1.current.innerText.trim(), input2.current.innerText, input3.current.innerText, rowState]);
			window.location.reload();
		}
		input1.current.removeAttribute('contentEditable');
		input2.current.removeAttribute('contentEditable');
		input3.current.removeAttribute('contentEditable');
		input2.current.disabled = true;
		input3.current.disabled = true;
		if ((rowState === 'Confirmar' || rowState === 'Cancelar') && !onDB) {
			setActualVideo({ TeamNameSpanish: initial[0], TeamAcronym: initial[1], FlagURL: actualVideo.FlagURL });
			input1.current.innerText = initial[0];
			input2.current.innerText = initial[1];
			// input3.current.innerText = initial[2];
			setRowState(initial[3]);
		}
	};

	const handleDelete = () => {
		const chk = window.confirm('¿Estás seguro de eliminar este video?');
		if (chk) {
			console.log('Eliminando');
			deleteVideoStudy({ id: actualVideo.StudyCode, loading: ldT, setLoading: setLdT, handleDonePost });
		}
	};

	return (
		<tr className='border-b  text-center hover:bg-gray-300'>
			<td ref={input1} className='break-words px-6 py-4 focus:bg-gray-400 focus:cursor-text focus:text-primary-color'>
				{actualVideo.StudyCode}
			</td>
			<td ref={input2} className='break-words px-6 py-4 focus:bg-gray-400 focus:cursor-text focus:text-primary-color'>
				{actualVideo.Duration}
			</td>
			<td ref={input3} className='break-words px-6 py-4 focus:bg-gray-400 focus:cursor-text focus:text-primary-color'>
				{actualVideo.Link}
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
