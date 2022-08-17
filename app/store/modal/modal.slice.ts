import { createSlice } from '@reduxjs/toolkit'
import { IModal } from './modal.interface'

const initialState: IModal = {
	type: 'login',
	isShow: false
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setIsShow(state) {
			state.isShow = !state.isShow
		},
		changeType(state, action) {
			state.type = action.payload
		}
	}
})

export const { setIsShow, changeType } = modalSlice.actions
export default modalSlice.reducer
