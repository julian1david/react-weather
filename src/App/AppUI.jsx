import { Fragment } from 'react';
import { CurrentWeather } from '../components/CurrentWeather';
import { ListDays } from '../components/ListDays';
import { LocalHour } from '../components/LocalHour';
import { Map } from '../components/Map';
import { NextHours } from '../components/NextHours';
import { useApi } from '../context/ApiContext';

export const AppUI = () => {
	const { data: weather, loading, coordinates } = useApi();

	if (loading) {
		return <p>Loading..</p>;
	}

	return (
		<Fragment>
			<CurrentWeather weather={weather} />
			<ListDays weather={weather} />
			<NextHours weather={weather}/>
			<Map coordinates={coordinates}/>
			<LocalHour/>
		</Fragment>
	);
};
