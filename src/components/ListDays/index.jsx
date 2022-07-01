import style from './ListDays.module.scss';
import { Day } from '../Day';

export const ListDays = ( { weather }) => {

	return (
		<ul className={style.daily}>
			{weather.daily.map(day => (
				<Day key={day.dt} {...day} />
			))}
		</ul>
	);
};
