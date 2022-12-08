import { useEffect, useState } from 'react';
import './localHour.scss'

export const LocalHour = ( { location }) => {
	console.log(location)
	const [hour, setHour] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			const getLocalDate = async () =>{
				try{
					const results =  await fetch('http://worldtimeapi.org/api/timezone/America/New_York');
					const data = await results.json()
					const localDate = new Date(data.datetime.split('.')[0])
					setHour(localDate)
					setLoading(false)
				}
				catch{
					setLoading(false)
					setError(true)
				}
			}
			getLocalDate()
		},3000)
	}, []);

	if (loading) {
		return <p className='container-hour'>Loading...</p>;
	}
	if(error){
		return <p className='container-hour'>Hubo un error al cargar la hora</p>
	}
	return (
		<div className='container-hour'>
			<p>
				{hour.getHours()}:{hour.getMinutes()}
			</p>
		</div>
	);
};
