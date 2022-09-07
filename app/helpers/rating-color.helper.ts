export function ratingColorHelper(rating: number) {
	if (rating <= 3.9) {
		return 'bad'
	} else if (rating <= 6.9) {
		return 'normal'
	} else {
		return 'good'
	}
}
