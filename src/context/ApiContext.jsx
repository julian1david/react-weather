import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_REACT_APP_API;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
	/* use State */
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [coordinates, setCoordinates] = useState({ lat: 47.44, long: 3.16 });

	useEffect(() => {
		// check if the Geolocation API is supported
		if (!navigator.geolocation) {
			console.log(`Your browser doesn't support Geolocation`);
			return;
		}

		navigator.geolocation.getCurrentPosition(
			pos => {
				const newUserPos = {
					lat: pos.coords.latitude,
					long: pos.coords.longitude,
				};
				setCoordinates(newUserPos);
				console.log(newUserPos);
			},
			error => {
				console.log(error);
			}
		);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			const infoWeather = async () => {
				try {
					const results = await axios(
						`${API}onecall?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${API_KEY}&units=metric`
					);
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
