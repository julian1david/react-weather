import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_REACT_APP_API;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
	/* use State */
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	// Si uso el estado vacio en la primer carga aparece un error de axios pero luego carga con las coordenadas de getLatAndLoading
	// const [coordinates, setCoordinates] = useState({  });
	const [coordinates, setCoordinates] = useState({ lat: 47.4, long: 3.16 });
	// Con este estado prioriza la carga de este state


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
					console.log(newUserPos)
			
			} catch (error) {
				console.log(error);
			}
		};
		location()
	},[]);

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
	}, [coordinates]);

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
