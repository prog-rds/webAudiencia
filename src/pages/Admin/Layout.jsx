import React from 'react';

function Layout ({ children }) {
	return (
		<>
			<main className='w-full mx-10 mt-10'>
				{children}
			</main>
		</>
	);
}

export default Layout;
