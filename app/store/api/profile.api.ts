import { api } from '@/store/api/api'
import { IPaginateResponse, IUser } from '@/types/user.interface'
import { IFilm } from '@/services/films.interface'

export const profileApi = api.injectEndpoints({
	endpoints: builder => ({
		getProfileData: builder.query<{ data: IUser }, string>({
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
		showViewedFilms: builder.query<IPaginateResponse<IFilm>, string>({
			query: page => `film/want-to-watch${page}`
		}),
		addViewedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: 'film/want-to-watch',
				method: 'POST',
				body: { film_id }
			})
		}),
		deleteViewedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: `film/want-to-watch/${film_id}`,
				method: 'DELETE'
			})
		}),
		uploadAvatar: builder.mutation<void, string>({
			query: image => ({
				url: 'user/avatar',
				method: 'POST',
				body: { image }
			})
		})
	})
})
