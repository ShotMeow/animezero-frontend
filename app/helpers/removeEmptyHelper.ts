export function removeEmptyHelper(obj: Object) {
	return Object.fromEntries(Object.entries(obj).filter(([, v]) => v != undefined && v != '' && v !== null && v !== 'undefined' && v));
}
