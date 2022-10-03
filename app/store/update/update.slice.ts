import { createSlice } from '@reduxjs/toolkit';
import { IUserUpdate } from '@/app/interfaces/IUserUpdate';

const initialState: IUserUpdate = {
	login: '',
	email: '',
	password: '',
	password_repeat: '',
	code: ''
};

export const updateSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setData(state, action) {
			state.login = action.payload.login;
			state.email = action.payload.email;
			state.password = action.payload.password;
			state.password_repeat = action.payload.password_repeat;
		},
		setCode(state, action) {
			state.code = action.payload;
		},
		clearData(state) {
			state.login = '';
			state.email = '';
			state.password = '';
			state.password_repeat = '';
			state.code = '';
		}
	}
});

export const { setData, setCode, clearData } = updateSlice.actions;
