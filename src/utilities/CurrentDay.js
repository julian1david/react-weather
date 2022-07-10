export const getCurrentDay = dayNumber => {
	const today = new Date();
	if (dayNumber) {
		const tomorrow = new Date(today);
		tomorrow.setDate(tomorrow.getDate() + dayNumber);
		return tomorrow;
	}
	return today.toDateString();
};
