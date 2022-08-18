import { getCurrentDay } from '../../utilities/CurrentDay';
import style from './CurrentWeather.module.scss';

export const CurrentWeather = ({ weather }) => {
	const currentDate = getCurrentDay();

	return (
		<section className={style.currentWeather}>
			<div className='currentWeather--details'>
				<h1>{weather.timezone}</h1>
				<h2>{currentDate}</h2>
				<h2>Temp </h2>
				<span>{weather.current.temp + ' °C'}</span>
				<div className='currentWeather--stats'>
					<ul>
						<li>
							<span>Wind </span>
							<span>{weather.current.wind_speed} mp/h</span>
						</li>
						<li>
							<span>Humidity </span>
							<span>{weather.current.humidity} %</span>
						</li>
					</ul>
					<div className='currentWeather--actual'>
						<h3>Partly</h3>
						{weather.current.weather.map(type => (
							<span key={type.id}>{type.main}</span>
						))}
					</div>
				</div>
			</div>
			<div className='currentWeather--img'>
				<img
					src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
					alt='image-clima'
				/>
			</div>
		</section>
	);
};
