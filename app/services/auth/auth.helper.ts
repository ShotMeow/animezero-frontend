export interface IAuthData {
	user: {
		login: string
		email: string
	} | null
	accessToken: string
}
