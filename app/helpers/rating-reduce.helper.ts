export const ratingReduceHelper = (rating: number) => {
	if (Number.isInteger(rating)) {
		return `${rating}.0`
	} else {
		return rating
	}
}
