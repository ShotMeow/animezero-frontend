import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../../api/axios'
import { TypeRootState } from '../store'
import { IVerify } from '@/services/auth/auth.helper'
import { IUser } from '@/types/user.interface'
import { IFilm } from '@/services/films.interface'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Auth', 'Profile', 'Films'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.token
			headers.set('Authorization', `Bearer ${token}`)
			return headers
		}
	}),
	endpoints: builder => ({
		verify: builder.query<any, IVerify>({
			query: query =>
				`email/verify/${query.id}/${query.hash}?expires=${query.expires}&signature=${query.signature}`,
			providesTags: () => [{ type: 'Auth' }]
		}),
		profile: builder.query<IUser, any>({
			query: () => `user/info`,
			providesTags: () => [{ type: 'Profile' }]
		}),
		showWatchedFilms: builder.query<IFilm[], any>({
			query: () => `film/watched`,
			providesTags: () => [{ type: 'Films' }]
		}),
		addWatchedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: 'film/watched',
				method: 'POST',
				body: film_id
			}),
			invalidatesTags: ['Films']
		}),
		deleteWatchedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: `film/watched/${film_id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Films']
		}),
		showTrackedFilms: builder.query<IFilm[], any>({
			query: () => `film/tracked`,
			providesTags: () => [{ type: 'Films' }]
		}),
		addTrackedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: 'film/tracked',
				method: 'POST',
				body: film_id
			}),
			invalidatesTags: ['Films']
		}),
		deleteTrackedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: `film/tracked/${film_id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Films']
		}),
		showWantToWatchFilms: builder.query<IFilm[], any>({
			query: () => `film/want-to-watch`,
			providesTags: () => [{ type: 'Films' }]
		}),
		addWantToWatchFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: 'film/want-to-watch',
				method: 'POST',
				body: film_id
			}),
			invalidatesTags: ['Films']
		}),
		deleteWantToWatchFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: `film/want-to-watch/${film_id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Films']
		})
	})
})
