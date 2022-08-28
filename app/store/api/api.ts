import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../../api/axios'
import { TypeRootState } from '../store'
import { IPaginateResponse, IUser } from '@/types/user.interface'
import { IFilm } from '@/services/films.interface'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.token
			token && headers.set('Authorization', `Bearer ${token}`)
			headers.set('Accept', 'application/json')
			return headers
		}
	}),
	endpoints: builder => ({
		verify: builder.mutation<void, string>({
			query: code => ({
				url: `email/verify`,
				method: 'POST',
				body: { code }
			})
		}),
		resend: builder.mutation<void, void>({
			query: () => ({
				url: `email/resend`,
				method: 'POST'
			})
		}),
		getProfileData: builder.query<IUser, void>({
			query: () => 'user/info'
		}),
		showWatchedFilms: builder.query<IPaginateResponse<IFilm>, string>({
			query: page => `film/watched${page}`
		}),
		addWatchedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: 'film/watched',
				method: 'POST',
				body: { film_id }
			})
		}),
		deleteWatchedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: `film/watched/${film_id}`,
				method: 'DELETE'
			})
		}),
		showTrackedFilms: builder.query<IPaginateResponse<IFilm>, string>({
			query: page => `film/tracked${page}`
		}),
		addTrackedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: 'film/tracked',
				method: 'POST',
				body: { film_id }
			})
		}),
		deleteTrackedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: `film/tracked/${film_id}`,
				method: 'DELETE'
			})
		}),
		showWantToWatchFilms: builder.query<IPaginateResponse<IFilm>, string>({
			query: page => `film/want-to-watch${page}`
		}),
		addWantToWatchFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: 'film/want-to-watch',
				method: 'POST',
				body: { film_id }
			})
		}),
		deleteWantToWatchFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: `film/want-to-watch/${film_id}`,
				method: 'DELETE'
			})
		}),
		logout: builder.mutation<void, void>({
			query: () => 'user/logout'
		})
	})
})
