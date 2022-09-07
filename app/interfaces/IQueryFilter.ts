import { SortType } from '@/app/services/films.interface'

export interface IQueryFilter {
	statuses?: string
	genres?: string
	type?: 'film' | 'serial'
	years?: string
	rating?: SortType
	title?: SortType
	page?: number
}
