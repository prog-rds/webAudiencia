import { useEffect, useRef, useState } from 'react';
import { updateUser } from '@src/hooks/PostData.jsx';

const RowUser = ({ user, onFocused, isFocused }) => {
	const [rowState, setRowState] = useState(null);
	const [initial, setInitial] = useState([]);
	const [actualUser, setActualUser] = useState({ ...user });
	const [ldP, setLdP] = useState('init');
	const [localFocus, setLocalFocus] = useState(false);

	const input1 = useRef();
	const input3 = useRef();

	const handleDonePost = (_) => unFocus(true);

	const statusOpts = ['Selecciona un estado', 'Administrador', 'Usuario'];

	useEffect(() => {
		setRowState('Editar');
		setInitial([actualUser.PhaseName, actualUser.PhaseStatus, actualUser.PhaseDate, actualUser.CountProfiles, rowState]);
		if (isFocused) {
			input1.current.contentEditable = true;
			input3.current.contentEditable = true;
			input3.current.disabled = false;
			input1.current.focus();
			setLocalFocus(true);
		}
	}, []);

	useEffect(() => {
		if (!isFocused) unFocus(false);
	}, [isFocused]);

	const unFocus = (onDB) => {
		if (onDB) {
			setInitial([input1.current.innerText, input3.current.value, rowState]);
			window.location.reload();
		}
		input1.current.removeAttribute('contentEditable');
		input3.current.removeAttribute('contentEditable');
		input3.current.disabled = true;
		if ((rowState === 'Confirmar' || rowState === 'Cancelar') && !onDB) {
			setActualUser({ PhaseName: initial[0], PhaseStatus: initial[1], PhaseDate: initial[2], CountProfiles: initial[3] });
			input1.current.innerText = initial[0];
			input3.current.value = initial[2];
			setRowState(initial[4]);
		}
		setLocalFocus(false);
	};

	const hadleEditMode = () => {
		setInitial([input1.current.innerText, input3.current.value, rowState]);
		setRowState('Cancelar');
		input1.current.contentEditable = true;
		input3.current.contentEditable = true;
		input3.current.disabled = false;
		input1.current.focus();
		onFocused();
		setLocalFocus(true);
	};

	const hadleCancel = () => {
		input1.current.removeAttribute('contentEditable');
		input3.current.removeAttribute('contentEditable');
		input3.current.disabled = true;
		input1.current.innerText = initial[0];
		input3.current.value = initial[2];
		setRowState(initial[4]);
		setLocalFocus(false);
	};

	const handleDelete = () => {
		const chk = window.alert('Existen registros asociados a este usuario que deben eliminarse primero');
		if (chk)
			console.log('Eliminar:', actualUser.UserId);
	};

	const hadleConfirm = () => {
		if (input1.current.innerText.trim() === '' || input3.current.value.trim() === '')
			window.alert('Los campos no pueden estar vacíos');
		else {
			setRowState('Cargando...');
			const body = {
				UserName: input1.current.innerText,
				UserRole: input3.current.value,
				LastProfile: parseInt(actualUser.CountProfiles)
			};
			if (actualUser.UserId !== -1) {
				const usrId = actualUser.UserId;
				console.log(body);
				updateUser({ id: usrId, loading: ldP, setLoading: setLdP, body, handleDonePost });
			}
		}
	};

	return (
		<tr className={`border-b  text-center ${isFocused ? 'bg-gray-50/50' : 'hover:bg-gray-400'}`}>
			<td scope='row' className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap'>
				{user.UserId.slice(0, 8)}
			</td>
			<td ref={input1} className='px-2 py-2 focus:bg-white focus:cursor-text focus:text-primary-color'>
				{user.Document}
			</td>
			<td className='px-2 py-2 focus:bg-white focus:cursor-text focus:text-primary-color'>
				<select
					disabled
					className='px-2 py-2 bg-transparent focus:bg-white focus:cursor-text focus:text-primary-color disabled:appearance-none'
					ref={input3}
					defaultValue={statusOpts.find(o => o === actualUser.UserRole) || statusOpts[0]}
				>
					{
						statusOpts.map((el, id) =>
							<option disabled={id === 0} key={el} value={el}>{el}</option>
						)
					}
				</select>
			</td>
			<td className='px-2 py-2'>
				{
					isFocused && localFocus
						? (
							<>
								<button
									className='btns-table'
									onClick={hadleCancel}
								>
									Cancelar
								</button>
								<button
									className='btns-table'
									onClick={hadleConfirm}
								>
									{
										ldP === 'loading'
											? 'Cargando...'
											: 'Confirmar'
									}
								</button>
							</>
						)
						: (
							<>
								<button
									className='btns-table'
									onClick={hadleEditMode}
								>
									Editar
								</button>
								<button
									className='btns-table'
									onClick={handleDelete}
								>
									Eliminar
								</button>
							</>
						)
				}
			</td>
		</tr>

	);
};
export default RowUser;
