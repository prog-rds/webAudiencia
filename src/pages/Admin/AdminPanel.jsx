import RowTable from '@src/components/RowTable';
import Layout from './Layout';

const AdminPanel = () => {
	return (
		<Layout>
			<section className='w-full'>
				<h2 className='w-full title-principal'>Panel administrativo</h2>
				<div className='w-10/12 p-6'>
					<div className='header-table'>
						<div className='text-center w-2/5'> Videos </div>
						<div className='text-center w-4/5'> Publicidades </div>
					</div>
					<div className='body-table '>
						<RowTable />
						<RowTable />
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default AdminPanel;
