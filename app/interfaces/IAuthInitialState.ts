export interface IAuthInitialState {
	token: string;
	tempToken: string;
	isLoading: boolean;
	user: {
		login: string
		email: string
	};
}
