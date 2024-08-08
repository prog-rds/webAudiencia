import CardReport from '@src/components/CardReport';

const TableReport = ({ user, userStudies, interactions, ads }) => {
	return (

		<div className=' flex mb-4 shadow-md'>
			<div className='ctn-left'>
				<div className='flex header-table rounded-tr-none'>
					<div className='text-center w-1/2'> usuario </div>
					<div className='bg-headerTable  text-center p-2 w-1/2'>
						<div className='rounded-xl w-full' />
						<input
							type='text'
							// placeholder='Cédula'
							className='rounded-xl w-full bg-headerTable'
						/>
					</div>
				</div>
				<div className='grid grid-cols-2'>
					<div className='grid '>
						<span>{user.UserName}</span>
					</div>
					<div className='grid grid-rows-SubTablehome grid-rows-6 items-center'>
						<span className='p-2 border border-black  items-center'>Publicidad </span>
						<span className='p-2 border border-black  items-center'>Fecha de reproducción </span>
						<span className='p-2 border border-black  items-center'>Hora de reproducción </span>
						<span className='p-2 border border-black  items-center'>Tiempo visto </span>
						<span className='p-2 border border-black  items-center'>Ubicación dentro del video </span>
						<span className='p-2 border border-black  items-center'>Skip </span>
					</div>
				</div>
			</div>
			<div className='ctn-rigth flex overflow-x-auto max-w-7xl'>
				{
					userStudies.map((us, i) => (
						<CardReport
							isLast={i === userStudies.length - 1}
							key={i}
							userStudy={us}
							ads={ads.filter((a) => a.StudyCode === us.StudyCode)}
							interactions={interactions.filter((i) => i.UserStudyId === us.UserStudyId)}
						/>
					))
				}
			</div>
		</div>
	);
};

export default TableReport;
