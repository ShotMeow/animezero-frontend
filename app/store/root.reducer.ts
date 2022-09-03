import { combineReducers } from 'redux'
import { authSlice } from './auth/auth.slice'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { modalSlice } from './modal/modal.slice'
import { api } from './api/api'
import { updateSlice } from '@/store/update/update.slice'

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authSlice.reducer,
	toastr: toastrReducer,
	modal: modalSlice.reducer,
	update: updateSlice.reducer
})
