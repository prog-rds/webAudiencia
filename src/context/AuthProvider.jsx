import { createContext, useState } from 'react';

export const AuthContext = createContext({
	isAuthenticated: false
});

export const AuthProvider = ({ children }) => {
	// eslint-disable-next-line no-undef
	const version = __APP_VERSION__;

	const [isAuthenticated, setAuthenticated] = useState(() => {
		const strgVersion = window.localStorage.version;
		const expire = window.localStorage.expire ? window.localStorage.expire < Date.now() : false;
		if (expire || strgVersion !== version)
			window.localStorage.clear();
		window.localStorage.setItem('version', version);
		return !!window.localStorage.token && !expire;
	});

	const login = () => setAuthenticated(true);

	return (
		<AuthContext.Provider value={{ login, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};
