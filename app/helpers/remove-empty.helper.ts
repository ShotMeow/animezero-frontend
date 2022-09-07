export function removeEmptyHelper(obj: Object) {
	return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ''))
}
