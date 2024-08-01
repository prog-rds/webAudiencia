import React from 'react';
import Menu from '@src/components/Menu';

function Layout ({ children }) {
	return (
		<>
			<Menu />
			<main className='w-full mx-10 mt-24'>
				{children}
			</main>
		</>
	);
}

export default Layout;
