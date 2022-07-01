import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_REACT_APP_API;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const ApiContext = createContext({});

const ApiContextProvider = ({ children }) => {
	/* use State */
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			const infoWeather = async () => {
				try {
					const results = await axios(API + API_KEY);
					const weather = results.data;
					setData(weather);
					setLoading(false);
				} catch (error) {
					console.log(error);
				}
			};
			infoWeather();
		}, 1000);
	}, []);

	return (
		<ApiContext.Provider
			value={{
				data,
				loading,
			}}
		>
			{children}
		</ApiContext.Provider>
	);
};

const useApi = () => {
	const context = useContext(ApiContext);
	if (context === undefined) {
		const error = 'Not exist context';
		throw error;
	}
	return context;
};

export { ApiContextProvider, useApi };
