import { useEffect, useState } from 'react';
import './localHour.scss'

export const LocalHour = () => {
	const [hour, setHour] = useState(null);
	useEffect(() => {
		fetch('http://worldtimeapi.org/api/timezone/America/NewYork')
			.then(response => response.json())
			.then(data => {
				const localDate = new Date(data.datetime.split('.')[0]);
				setHour(localDate);
			});
	}, []);

	if (!hour) {
		return <p>Loading...</p>;
	}

	return (
		<div className='container-hour'>
			<p>
				{hour.getHours()}:{hour.getMinutes()}
			</p>
		</div>
	);
};
