const useLogin = ({ loadingFetch, setLoadingFetch, query, handleDoneFetch }) => {
	if (loadingFetch === 'ok') return;
	fetchLogin({ setLoadinng: setLoadingFetch, path: '/login', query }).then((d) => handleDoneFetch(d))
		.catch((err) => {
			window.alert(err);
		});
};

const fetchLogin = ({ setLoadinng, path, query }) => {
	return new Promise((resolve, reject) => {
		setLoadinng('loading');
		const uri = import.meta.env.VITE_API_URI;

		fetch(`${uri}${path}?${new URLSearchParams(query)}`).then(async res => {
			if (res.ok) return res.json();
			const text = await res.text();
			console.log(text);
			const error = new Error();
			error.data = res;
			throw error;
		}).then(data => {
			setLoadinng('ok');
			resolve(data);
		}).catch(err => {
			setLoadinng('error');
			console.log(err);
			const msg = err.data && err.data.status === 401 ? 'Usuario o contraseña incorrectos.' : 'Ha ocurrido un error, por favor intenta nuevamente.';
			reject(new Error(msg));
		});
	});
};

export { useLogin };
