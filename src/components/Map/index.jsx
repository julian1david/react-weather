import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';


export const Map = ( { coordinates } ) => {

	const lat = coordinates.lat;
	const lon = coordinates.long;

	return (
		<MapContainer center={[lat, lon]} zoom={13} className="container">
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={[lat, lon]}>
                
            </Marker>
		</MapContainer>
	);
};
