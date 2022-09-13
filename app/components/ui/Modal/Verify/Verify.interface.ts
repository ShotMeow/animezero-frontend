type InfoType = 'error' | 'success'

export interface IInfo {
	type: InfoType;
	body: string;
}
