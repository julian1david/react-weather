import { createContext, useState, useEffect, useContext } from "react";
import { axios } from 'axios'

const API = import.meta.env.VITE_REACT_APP_API;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const ApiContext = createContext ({})

const ApiContextProvider = ( { children }) => {

    /* use State */
    const [data, setData] =useState('')
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const infoWeather = async () => {
			try {
				const { data } = await axios(API + API_KEY);
				setData(data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		infoWeather();
	}, []);

	return (
		<ApiContext.Provider
		value={{
		data,
		loading
	}}
	>
		{children}
	</ApiContext.Provider>
	)
}

const useApi = () => {
	const context = useContext(ApiContext);
	if(context === undefined){
		const error  = "Not exist context";
		throw error;
	} 
	return context
}

export { ApiContextProvider, useApi }