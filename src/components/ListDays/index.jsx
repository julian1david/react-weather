import { Day } from '../Day';

export const ListDays = ({ weather }) => {
	return (
		<ul className='container'>
			{weather.daily.map((day, index) => (
				<Day key={day.dt} {...day} index={index} />
			))}
		</ul>
	);
};
