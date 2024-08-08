import CardReport from '@src/components/CardReport';

const TableReport = ({ user, userStudies, interactions, ads }) => {
	return (
		<div className=' flex mb-4 shadow-md max-w-full overflow-hidden'>
			<div className='ctn-left min-w-max'>
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
				<div className='grid grid-cols-2 grid-rows-6'>
					<div className='col-start-1 col-end-2 row-start-1 row-end-7'>
						{user.UserName}
					</div>
					<span className='p-2 border border-black  items-center row-start-1 row-end-2 '>Publicidad </span>
					<span className='p-2 border border-black  items-center row-start-2 row-end-3'>Fecha de reproducción </span>
					<span className='p-2 border border-black  items-center row-start-3 row-end-4'>Hora de reproducción </span>
					<span className='p-2 border border-black  items-center row-start-4 row-end-5'>Tiempo visto </span>
					<span className='p-2 border border-black  items-center row-start-5 row-end-6'>Ubicación dentro del video </span>
					<span className='p-2 border border-black  items-center row-start-6 row-end-7'>Skip </span>
				</div>
			</div>
			<div className='ctn-rigth flex overflow-x-auto max-w-8xl'>
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
