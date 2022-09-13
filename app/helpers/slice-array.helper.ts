export function sliceArrayHelper<T>(arr: T[], chunk: number) {
	const result = [];
	for (let i = 0; i < arr.length; i += chunk) {
		result.push(arr.slice(i, i + chunk));
	}

	return result;
}
