
import style from './CurrentWeather.module.scss';
import { ListDays } from '../ListDays';
import { useContext } from 'react';
import { useApi } from '../../context/ApiContext';



export const CurrentWeather = () => {

	const {
		data, 
		loading
	} = useContext(useApi)
	if (loading) {
		return <p>Loading..</p>;
	}
	console.log(data)
	
	return (
		<section className={style.currentWeather}>
			{/* <div className='currentWeather--details'>
				<h1>{weather.timezone}</h1>
				<h2>Temp </h2>
				<span>{weather.current.temp}</span>
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
				<img src='' alt='image-clima' />
			</div>
			<ListDays days={weather.daily}/> */}
		</section>
	);
};
