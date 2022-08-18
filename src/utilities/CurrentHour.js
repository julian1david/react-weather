export const getCurrentHour = hour => {
	const date = new Date();
	const currentHour = date.getHours();
	if (hour) {
		date.setHours(currentHour + hour);
		return date.getHours();
	}
	return currentHour;
};
