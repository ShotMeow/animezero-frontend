type ModalType = 'login' | 'register' | 'verify' | 'update-verify'

export interface IModal {
	type: ModalType
	isShow: boolean
}
