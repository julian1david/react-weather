import { useApi } from '../../context/ApiContext';
import style from './ListDays.module.scss';
import { Day } from '../Day';

export const ListDays = () => {
	const { data: weather, loading } = useApi();

	if (loading) {
		return <p>Charing data</p>;
	}
	console.log(weather);
	return (
		<ul className={style.daily}>
			{weather.daily.map(day => (
				<Day key={day.dt} {...day} />
			))}
		</ul>
	);
};
