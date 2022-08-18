export interface IAuthData {
	data: {
		token: string
	}
}

export interface IVerify {
	id: string
	expires: string
	signature: string
	hash: string
}
