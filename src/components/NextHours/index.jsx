import { Hours } from '../Hours';

export const NextHours = ({ weather }) => {
	weather.hourly.length = 20;

	return (
		<ul className='container'>
			{weather.hourly.map((hour, id) => (
				<Hours key={hour.dt} {...hour} addHour={id} />
			))}
		</ul>
	);
};
