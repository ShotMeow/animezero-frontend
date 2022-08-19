type ModalType = 'login' | 'register' | 'verify'

export interface IModal {
	type: ModalType
	isShow: boolean
}
