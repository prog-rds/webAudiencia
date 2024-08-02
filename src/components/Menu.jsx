import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu () {
	const activeStyle = 'border-b-2 border-linksMenu';
	const closeSession = () => {
		window.localStorage.clear();
		window.location.href = '/login';
	};
	return (
		<nav className='bg-menu text-linksMenu font-customFont fixed top-0 w-full h-12 flex justify-center items-center z-50 font-bold '>
			<ul className='w-8/12 flex justify-center items-center gap-4'>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined}
					>
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/adminusers'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined}
					>Usuarios
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/adminvideos'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined}
					>Videos y publicidad
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/adminpanel'
						className={({ isActive }) =>
							isActive ? activeStyle : undefined}
					>Panel de adminstrador
					</NavLink>
				</li>
			</ul>
			<div className='w-4/12'>
				<button onClick={closeSession}>Cerrar sesion</button>
			</div>
		</nav>
	);
}

export default Menu;
