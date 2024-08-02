import React from 'react';
import Menu from '@src/components/Menu';
import Footer from '@src/components/Footer';

function Layout ({ children, user }) {
	return (
		<>
			{!user && <Menu />}
			<main className='w-full py-24 px-10'>
				{children}
			</main>
			<Footer />
		</>
	);
}

export default Layout;
