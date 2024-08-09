import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import imgmenu from '@src/assets/img/menu.png';

function Menu () {
	const activeStyle = 'my-2 border-b-2 border-linksMenu';
	const closeSession = () => {
		window.localStorage.clear();
		window.location.href = '/login';
	};
	const [isopen, setisopen] = useState(false);
	const toggleMenu = () => {
		setisopen((open) => !open);
	};
	return (
		<nav className='bg-menu text-linksMenu font-customFont fixed top-0 w-full h-12 flex justify-center items-center z-50 font-bold '>
			<ul className='w-8/12 justify-center items-center gap-4 hidden md:flex'>
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
			<figure className='w-3/5'>
				<img className='w-10 h-10 md:hidden' src={imgmenu} alt='menu logo' onClick={toggleMenu} />
			</figure>
			
			<ul className={`w-full flex absolute top-12 flex-col justify-center  items-center bg-menu md:top-0 md:w-8/12 md:flex-row md:relative ${isopen ? 'flex' : 'hidden'}`}>

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
