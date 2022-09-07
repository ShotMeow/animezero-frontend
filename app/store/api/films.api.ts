import { api } from './api'
import { IFilm } from '@/app/services/films.interface'
import { IPaginateResponse } from '@/app/types/user.interface'

export const filmsApi = api.injectEndpoints({
	endpoints: builder => ({
		getFilmsBySearchTerm: builder.query<{ data: IFilm[] }, string>({
			query: searchTerm => ({
				url: '/film/search',
				params: { query: searchTerm }
			})
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
		})
	})
})
