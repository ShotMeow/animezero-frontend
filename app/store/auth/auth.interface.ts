export interface IAuthInitialState {
	token: string
	isLoading: boolean
	user: {
		login: string
		email: string
	}
}
