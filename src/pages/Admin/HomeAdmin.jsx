import Layout from './Layout';

const HomeAdmin = () => {
	return (
		<Layout>
			<section className='grid place-items-center'>
				<div className=' flex mb-4 shadow-md  w-full'>
					<div className='ctn-left'>
						<div className='flex header-table rounded-tr-none'>
							<div className='text-center w-1/2'> usuario </div>
							<div className='bg-headerTable  text-center p-2 w-1/2'>
								<input
									type='text'
									placeholder='Cédula'
									className='rounded-xl w-full'
								/>
							</div>
						</div>
						<div className='grid grid-cols-2'>
							<div className='grid '>
								<span>11111111111</span>
							</div>
							<div className='grid grid-rows-SubTablehome grid-rows-7 items-center'>
								<span className='p-2 border border-black  items-center'>Publicidad </span>
								<span className='p-2 border border-black  items-center'>Fecha de reproducción </span>
								<span className='p-2 border border-black  items-center'>Hora de reproducción </span>
								<span className='p-2 border border-black  items-center'>Tiempo visto </span>
								<span className='p-2 border border-black  items-center'>Ubicación dentro del video </span>
								<span className='p-2 border border-black  items-center'>Skip </span>
							</div>
						</div>
					</div>

					<div className='ctn-rigth flex '>
						<div>
							<div className='flex header-table rounded-tl-none'>
								<div className='bg-headerTable text-center p-2 w-1/2'>
									video  1
								</div>
							</div>
							<div className='grid'>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'> Publicidad 1</span>
									<span className=' p-2 border border-black text-center'> Publicidad 2</span>
								</div>
								<div className=' p-2 text-center border border-black'>
									00/00/00
								</div>
								<div className=' p-2 text-center border border-black'>
									00:25
								</div>
								<div className='grid grid-cols-2  '>
									<span className=' p-2 border border-black text-center'>00.00</span>
									<span className=' p-2 border border-black text-center'> 00.00</span>
								</div>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'>00.00</span>
									<span className=' p-2 border border-black text-center'> 00.00</span>
								</div>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'>si</span>
									<span className=' p-2 border border-black text-center'>no</span>
								</div>
							</div>
						</div>
						<div>
							<div className='flex header-table rounded-tl-none'>
								<div className='bg-headerTable text-center p-2 w-1/2'>
									video  1
								</div>
							</div>
							<div className='grid'>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'> Publicidad 1</span>
									<span className=' p-2 border border-black text-center'> Publicidad 2</span>
								</div>
								<div className=' p-2 text-center border border-black'>
									00/00/00
								</div>
								<div className=' p-2 text-center border border-black'>
									00:25
								</div>
								<div className='grid grid-cols-2  '>
									<span className=' p-2 border border-black text-center'>00.00</span>
									<span className=' p-2 border border-black text-center'> 00.00</span>
								</div>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'>00.00</span>
									<span className=' p-2 border border-black text-center'> 00.00</span>
								</div>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'>si</span>
									<span className=' p-2 border border-black text-center'>no</span>
								</div>
							</div>
						</div>
						<div>
							<div className='flex header-table rounded-tl-none'>
								<div className='bg-headerTable text-center p-2 w-1/2'>
									video  1
								</div>
							</div>
							<div className='grid'>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'> Publicidad 1</span>
									<span className=' p-2 border border-black text-center'> Publicidad 2</span>
								</div>
								<div className=' p-2 text-center border border-black'>
									00/00/00
								</div>
								<div className=' p-2 text-center border border-black'>
									00:25
								</div>
								<div className='grid grid-cols-2  '>
									<span className=' p-2 border border-black text-center'>00.00</span>
									<span className=' p-2 border border-black text-center'> 00.00</span>
								</div>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'>00.00</span>
									<span className=' p-2 border border-black text-center'> 00.00</span>
								</div>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'>si</span>
									<span className=' p-2 border border-black text-center'>no</span>
								</div>
							</div>
						</div>
						<div>
							<div className='flex header-table rounded-tl-none'>
								<div className='bg-headerTable text-center p-2 w-1/2'>
									video  1
								</div>
							</div>
							<div className='grid'>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'> Publicidad 1</span>
									<span className=' p-2 border border-black text-center'> Publicidad 2</span>
								</div>
								<div className=' p-2 text-center border border-black'>
									00/00/00
								</div>
								<div className=' p-2 text-center border border-black'>
									00:25
								</div>
								<div className='grid grid-cols-2  '>
									<span className=' p-2 border border-black text-center'>00.00</span>
									<span className=' p-2 border border-black text-center'> 00.00</span>
								</div>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'>00.00</span>
									<span className=' p-2 border border-black text-center'> 00.00</span>
								</div>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'>si</span>
									<span className=' p-2 border border-black text-center'>no</span>
								</div>
							</div>
						</div>
						<div>
							<div className='flex header-table rounded-tl-none'>
								<div className='bg-headerTable text-center p-2 w-1/2'>
									video  1
								</div>
							</div>
							<div className='grid'>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'> Publicidad 1</span>
									<span className=' p-2 border border-black text-center'> Publicidad 2</span>
								</div>
								<div className=' p-2 text-center border border-black'>
									00/00/00
								</div>
								<div className=' p-2 text-center border border-black'>
									00:25
								</div>
								<div className='grid grid-cols-2  '>
									<span className=' p-2 border border-black text-center'>00.00</span>
									<span className=' p-2 border border-black text-center'> 00.00</span>
								</div>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'>00.00</span>
									<span className=' p-2 border border-black text-center'> 00.00</span>
								</div>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'>si</span>
									<span className=' p-2 border border-black text-center'>no</span>
								</div>
							</div>
						</div>
						<div>
							<div className='flex header-table rounded-tl-none'>
								<div className='bg-headerTable text-center p-2 w-1/2'>
									video  1
								</div>
							</div>
							<div className='grid'>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'> Publicidad 1</span>
									<span className=' p-2 border border-black text-center'> Publicidad 2</span>
								</div>
								<div className=' p-2 text-center border border-black'>
									00/00/00
								</div>
								<div className=' p-2 text-center border border-black'>
									00:25
								</div>
								<div className='grid grid-cols-2  '>
									<span className=' p-2 border border-black text-center'>00.00</span>
									<span className=' p-2 border border-black text-center'> 00.00</span>
								</div>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'>00.00</span>
									<span className=' p-2 border border-black text-center'> 00.00</span>
								</div>
								<div className='grid grid-cols-2 '>
									<span className=' p-2 border border-black text-center'>si</span>
									<span className=' p-2 border border-black text-center'>no</span>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default HomeAdmin;
