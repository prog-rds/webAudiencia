import React, { useEffect, useState } from 'react';
import { getItems } from '@src/hooks/LoaderData.jsx';
import { Skeletons } from './Skeletons';
import { Link } from 'react-router-dom';
import RowUser from '@components/RowUser';

function TableUsers () {
	const [rowFocused, setRowFocused] = useState([]);

	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState('init');

	useEffect(() => getItems({ path: '/users', loading, setLoading, setData }), []);
	const handleFocused = id => setRowFocused(id);

	const setData = (data) => {
		console.log(data);
		setUsers(data);
	};

	return (
		<Skeletons on={loading} msg='Cargando usuarios'>
			<div className='w-full text-right mb-4'>
				<Link className='btns-table mx-3 mb-5' to='./new'>
					Nuevo
				</Link>
			</div>
			<div className='relative overflow-x-auto shadow-md pb-24'>
				<table className='text-sm text-center text-black min-w-full '>
					<thead className='text-xs text-white uppercase bg-headerTable sm:rounded-lg'>
						<tr className='border-t border-b'>
							<th scope='col' className='px-4 py-3'>
								Id
							</th>
							<th scope='col' className='px-4 py-3'>
								Documento
							</th>
							<th scope='col' className='px-4 py-3'>
								Rol
							</th>
							<th scope='col' className='px-4 py-3'>
								Acciones
							</th>
						</tr>
					</thead>
					<tbody>
						{users.slice(1)?.map((u, i) => (
							<RowUser
								isFocused={rowFocused === u.UserId}
								onFocused={() => handleFocused(u.UserId)}
								key={i}
								user={u}
							/>
						))}
					</tbody>
				</table>
			</div>
		</Skeletons>
	);
}

export default TableUsers;
