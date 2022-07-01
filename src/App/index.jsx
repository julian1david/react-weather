import { CurrentWeather } from '../components/CurrentWeather';
import { ApiContextProvider } from '../context/ApiContext';
import { ListDays } from '../components/ListDays';


export const App = () => {
	return (
		<ApiContextProvider>
			<CurrentWeather />
			<ListDays/>
		</ApiContextProvider>
	);
};
