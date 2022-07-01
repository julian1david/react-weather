import { ApiContextProvider } from '../context/ApiContext';
import { AppUI } from './AppUI';

export const App = () => {
	return <ApiContextProvider>
		<AppUI/>
	</ApiContextProvider>;
};
