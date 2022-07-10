import { getCurrentHour } from '../../utilities/CurrentHour';
import style from './Hours.module.scss';

export const Hours = ({ weather, addHour, temp }) => {

	const hour = getCurrentHour(addHour)
	
	return (
		<li className={style.hours}>
			<p>{temp}</p>
			<img
				src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
				alt=''
			/>
			<p>{`${hour} :  ${new Date().getMinutes()}`}</p>
		</li>
	);
};
