export interface ILoginFields {
	login: string
	password: string
}

export interface IRegisterFields extends ILoginFields {
	email: string
	repeat_password: string
}
