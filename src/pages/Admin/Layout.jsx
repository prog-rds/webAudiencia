import React from 'react';
import Menu from '@src/components/Menu';

function Layout ({ children }) {
	return (
		<>
			<Menu />
			<main className='w-full py-24 px-10'>
				{children}
			</main>
		</>
	);
}

export default Layout;
