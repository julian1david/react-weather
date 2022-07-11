import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_REACT_APP_API;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
	/* use State */
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [coordinates, setCoordinates] = useState({ lat: 43.4, long: 3.16 });

	useEffect(() => {
		const getLatAndLong = () => {
			return new Promise((resolve, reject) =>
			navigator.geolocation.getCurrentPosition(resolve, reject)
		);}

		const location = async () => {

			try {
				// check if the Geolocation API is supported
				if (!navigator.geolocation) {
					console.log(`Your browser doesn't support Geolocation`);
					return;
				}
				const position = await getLatAndLong()
					const { coords } = position;
					const newUserPos = {
						lat: coords.latitude,
						long: coords.longitude,
					};
					setCoordinates(newUserPos);
			
			} catch (error) {
				console.log(error);
			}
		};
		location()
	}, []);

	useEffect(() => {
		setTimeout(() => {
			const infoWeather = async () => {
				try {
					const url =  `${API}onecall?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${API_KEY}&units=metric`
					const results = await axios(url);
					const weather = results.data;
					setData(weather);
					setLoading(false);
				} catch (error) {
					console.log(error);
				}
			};
			infoWeather();
		}, 2000);
	}, []);

	return (
		<ApiContext.Provider
			value={{
				data,
				loading,
				coordinates,
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
