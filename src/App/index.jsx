import { CurrentWeather } from '../components/CurrentWeather';
import { ApiContextProvider } from '../context/ApiContext';

export const App = () => {
	return (
		<ApiContextProvider>
			<CurrentWeather />
		</ApiContextProvider>
	);
};
