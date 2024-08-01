const getItems = ({ path, loading, setLoading, setData }) => {
	console.log('Getting: ', path);
	if (loading === 'ok') return;
	fetchData({ setLoading, path }).then((d) => setData(d))
		.catch((err) => {
			console.log(err);
			setData({ status: 500, err });
		});
};

const fetchData = ({ setLoading, path }) => {
	return new Promise((resolve, reject) => {
		const myHeaders = new Headers();
		myHeaders.append('Authorization', `Bearer ${window.localStorage.token}`); // produccion

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};

		setLoading('loading');
		const uri = import.meta.env.VITE_API_URI;
		fetch(`${uri}${path}`, requestOptions)
			.then(res => {
				if (res.ok) return res.json();
				throw res;
			})
			.then(data => {
				setLoading('ok');
				resolve(data);
			})
			.catch(async err => {
				const text = await err.text();
				console.log('[GET txt]: ', text);
				console.log('[GET err]: ', err);
				setLoading(processError(err));
				reject(processError(err));
			});
	});
};
const processError = (err) => {
	if (err.status === 401) {
		window.localStorage.clear();
		window.location.href = '/login';
	}
	err = err.statusText && err.status === 404 ? 'No existe el elemento' : 'Ha ocurrido un error, por favor intenta nuevamente.';
	return err;
};

export { getItems };
