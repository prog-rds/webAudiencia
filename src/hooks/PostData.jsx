// Create a new bet

const createUser = ({ loading, setLoading, body, handleDonePost }) => {
	if (loading === 'ok') return;
	postData({ setLoading, path: '/users', body, method: 'POST' }).then((d) => handleDonePost(d))
		.catch((err) => {
			window.alert(err);
		});
};
const updateUser = ({ id, loading, setLoading, body, handleDonePost }) => {
	if (loading === 'ok') return;
	postData({ setLoading, path: `/users/${id}`, body, method: 'PATCH' }).then((d) => handleDonePost(d))
		.catch((err) => {
			window.alert(err);
		});
};
const loadImage = ({ loading, setLoading, body, handleDonePost }) => {
	if (loading === 'ok') return;
	postData({ setLoading, path: '/assets', body, method: 'POST' }).then((d) => handleDonePost(d))
		.catch((err) => {
			window.alert(err);
		});
};
const deleteUser = ({ id, setLoading, handleDonePost }) => {
	postData({ setLoading, path: `/users/${id}`, method: 'DELETE' }).then(() => handleDonePost())
		.catch((err) => {
			setLoading('ok');
			window.alert(err);
		});
};
const deleteVideoStudy = ({ id, setLoading, handleDonePost }) => {
	postData({ setLoading, path: `/videostudies/${id}`, method: 'DELETE' }).then(() => handleDonePost())
		.catch((err) => {
			setLoading('ok');
			window.alert(err);
		});
};

const postData = ({ setLoading, path, body, method }) => {
	return new Promise((resolve, reject) => {
		setLoading('loading');
		const uri = import.meta.env.VITE_API_URI;
		const myHeaders = new Headers();
		myHeaders.append('Authorization', `Bearer ${window.localStorage.token}`);
		myHeaders.append('Content-Type', 'application/json; charset=utf-8');

		const requestOptions = {
			method,
			headers: myHeaders,
			body: JSON.stringify(body)
		};

		fetch(`${uri}${path}`, requestOptions).then(async res => {
			if (res.ok) return res.json();
			throw res;
		}).then(data => {
			setLoading('ok');
			resolve(data);
		}).catch(async err => {
			const text = await err.text();
			console.log(`[${method} err]: `, err);
			console.log(`[${method} txt]: `, text);
			err = err.data && err.data.status === 422 ? 'Datos incompletos, por favor revisa los campos' : 'Ha ocurrido un error, por favor intenta nuevamente.';
			setLoading('error');
			reject(err);
		});
	});
};

export { createUser, deleteUser, updateUser, loadImage, deleteVideoStudy };
