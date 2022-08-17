type ModalType = 'login' | 'register'

export interface IModal {
	type: ModalType
	isShow: boolean
}
