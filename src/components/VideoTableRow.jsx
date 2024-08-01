import { deleteVideoStudy } from '@src/hooks/PostData';
import React, { useEffect, useRef, useState } from 'react';

const VideoTableRow = ({ video, onFocused, isFocused }) => {
	const [theFlag, setTheFlag] = useState(null);
	const [rowState, setRowState] = useState(null);
	const [initial, setInitial] = useState([]);
	const [actualVideo, setActualVideo] = useState(video);
	const [ldT, setLdT] = useState('init');
	const [localFocus, setLocalFocus] = useState(false);

	const input1 = useRef();
	const input2 = useRef();
	const input3 = useRef();
	// const input4 = useRef();
	const handleDonePost = (_) => unFocus(true);
	// LoadFlag(video.TeamNameSpanish, setTheFlag);

	useEffect(() => {
		setRowState('Editar');
		setInitial([actualVideo.TeamNameSpanish, actualVideo.TeamAcronym, actualVideo.FlagURL, rowState]);
		if (isFocused) {
			// input1.current.contentEditable = true;
			// input2.current.contentEditable = true;
			// input3.current.contentEditable = true;
			// input2.current.disabled = false;
			// input3.current.disabled = false;
			// input1.current.focus();
			// setLocalFocus(true);
		}
	}, []);

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
			// Aquí se actualiza el visual de la bandera!!!!!!!
			setActualVideo({ TeamNameSpanish: initial[0], TeamAcronym: initial[1], FlagURL: actualVideo.FlagURL });
			input1.current.innerText = initial[0];
			input2.current.innerText = initial[1];
			// input3.current.innerText = initial[2];
			setRowState(initial[3]);
		}
		setLocalFocus(false);
	};

	const hadleEditMode = () => {
		setInitial([input1.current.innerText.trim(), input2.current.innerText, input3.current.innerText, rowState]);
		setRowState('Cancelar');
		input1.current.contentEditable = true;
		input2.current.contentEditable = true;
		input3.current.contentEditable = true;
		input2.current.disabled = false;
		input3.current.disabled = false;
		input1.current.focus();
		onFocused();
		setLocalFocus(true);
	};

	const hadleCancel = () => {
		input1.current.removeAttribute('contentEditable');
		input2.current.removeAttribute('contentEditable');
		input3.current.removeAttribute('contentEditable');
		input2.current.disabled = true;
		input3.current.disabled = true;
		input1.current.innerText = initial[0];
		input2.current.innerText = initial[1];
		// input3.current.innerText = initial[2];
		setRowState(initial[3]);
		setLocalFocus(false);
	};

	const handleDelete = () => {
		const chk = window.confirm('¿Estás seguro de eliminar este video?');
		if (chk) {
			console.log('Eliminando');
			deleteVideoStudy({ id: actualVideo.StudyCode, loading: ldT, setLoading: setLdT, handleDonePost });
		}
	};

	const hadleConfirm = () => {
		if (input1.current.innerText.trim() === '' || input2.current.innerText.trim() === '')// || input3.current.innerText.trim() === '')
			window.alert('Los campos no pueden estar vacíos');
		else {
			setRowState('Cargando...');
			const body = {
				TeamName: input1.current.innerText.trim(),
				TeamNameSpanish: input1.current.innerText.trim(),
				TeamAcronym: input2.current.innerText,
				FlagURL: `Equipo: ${input1.current.innerText.trim()}`
			};
			if (actualVideo.StudyCode !== -1)
				console.log('Updated');
			// updateTeam({ id: actualTeam.StudyCode, loading: ldT, setLoading: setLdT, body, handleDonePost });
			else
				console.log('Created');
			// createTeam({ loading: ldT, setLoading: setLdT, body, handleDonePost });
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
