import style from './Day.module.scss';
import { getCurrentDay } from '../../utilities/CurrentDay';
export const Day = ({ weather, temp, index }) => {
	const date = getCurrentDay(index + 1);

	return (
		<li className={style.day}>
			<h2>{temp.max}</h2>
			<img
				src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
				alt={weather[0].main}
			/>
			<h3>{weather[0].main}</h3>
			<p>{date.toDateString()}</p>
		</li>
	);
};
