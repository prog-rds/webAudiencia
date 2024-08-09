import logo from '@src/assets/img/ytlogo.png';

const PlayScreen = ({ handlePlay }) => {
	return (
		<div className='bg-black flex items-center justify-center h-5/6 w-4/6 rounded-lg'>
			<button className='h-1/6 w-1/6' onClick={handlePlay}>
				<img src={logo} alt='' />
			</button>
		</div>
	);
};

export default PlayScreen;
