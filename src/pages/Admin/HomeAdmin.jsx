import TableReport from '@src/components/TableReport';
import Layout from './Layout';
import { getItems, fetchReport } from '@src/hooks/LoaderData.jsx';
import { useEffect, useState } from 'react';
import { Skeletons } from '@src/components/Skeletons';

const HomeAdmin = () => {
	const [loadingU, setLoadingU] = useState('init');
	const [loadingUs, setLoadingUs] = useState('init');
	const [loadingI, setLoadingI] = useState('init');
	const [loadingAds, setLoadingAds] = useState('init');
	const [loadingDownload, setLoadingDownload] = useState('init');

	const [userStudies, setUserStudies] = useState([]);
	const [users, setUsers] = useState([]);
	const [interactions, setInteractions] = useState([]);
	const [ads, setAds] = useState([]);

	useEffect(() => getItems({ path: '/users', loading: loadingU, setLoading: setLoadingU, setData: setDataU }), []);
	useEffect(() => getItems({ path: '/userstudies', loading: loadingUs, setLoading: setLoadingUs, setData: setDataUs }), []);
	useEffect(() => getItems({ path: '/interactions', loading: loadingI, setLoading: setLoadingI, setData: setDataI }), []);
	useEffect(() => getItems({ path: '/ads', loading: loadingAds, setLoading: setLoadingAds, setData: setDataAds }), []);

	const setDataU = (data) => {
		// console.log(data);
		setUsers(data);
	};
	const setDataUs = (data) => {
		// console.log(data);
		setUserStudies(data);
	};
	const setDataI = (data) => {
		// console.log(data);
		setInteractions(data);
	};
	const setDataAds = (data) => {
		// console.log(data);
		setAds(data);
	};

	const handleDownload = async () => {
		// download a csv
		await fetchReport(loadingDownload, setLoadingDownload);
		setLoadingDownload('init');
	};
	return (
		<Layout>
			<section className='grid pb-24'>
				<div className='w-full text-right mb-4'>
					<button className='btns-table mx-3 mb-5' onClick={handleDownload}>
						Descargar
					</button>
				</div>
				<Skeletons on={loadingUs} msg='Cargando'>
					{
						users.filter((u) => u.UserRole === 'Usuario').map((u, i) => (
							<TableReport
								key={i}
								user={u}
								userStudies={userStudies.filter((us) => us.UserId === u.UserId)}
								interactions={interactions}
								ads={ads}
							/>
						))
					}
				</Skeletons>
			</section>
		</Layout>
	);
};

export default HomeAdmin;
