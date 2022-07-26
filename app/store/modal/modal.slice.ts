import { createSlice } from '@reduxjs/toolkit';
import { IModal } from '@/app/interfaces/IModal';


const initialState: IModal = {
	type: 'login',
	isShow: false
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setIsShow(state) {
			state.type = 'login';
			state.isShow = !state.isShow;
		},
		changeType(state, action) {
			state.type = action.payload;
		}
	}
});

export const { setIsShow, changeType } = modalSlice.actions;
