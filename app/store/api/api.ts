import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TypeRootState } from '@/app/store/store';
import { IUserUpdate } from '@/app/interfaces/IUserUpdate';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['User', 'Watched', 'Tracked', 'Viewed'],
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.token;
			const tempToken = (getState() as TypeRootState).auth.tempToken;
			if (token) {
				headers.set('Authorization', `Bearer ${token}`);
			} else if (tempToken) {
				headers.set('Authorization', `Bearer ${tempToken}`);
			}
			headers.set('Accept', 'application/json');
			return headers;
		}
	}),
	endpoints: builder => ({
		verify: builder.mutation<void, string>({
			query: code => ({
				url: 'email/verify',
				method: 'POST',
				body: { code }
			})
		}),
		resend: builder.mutation<void, void>({
			query: () => ({
				url: 'email/resend',
				method: 'POST'
			})
		}),
		logout: builder.mutation<void, void>({
			query: () => 'user/logout'
		}),
		requestCode: builder.mutation<void, void>({
			query: () => ({
				url: 'user/request-code',
				method: 'POST'
			})
		}),
		update: builder.mutation<void, IUserUpdate>({
			query: data => ({
				url: 'user/update',
				method: 'POST',
				body: { ...data }
			})
		})
	})
});
