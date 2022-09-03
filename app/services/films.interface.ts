export type BlockTypes = 'best' | 'newest' | 'ongoing' | 'recommended'

export interface IType {
	id: number
	name: string
	value: string
}

export interface IGenre {
	id: number
	name: string
	value: string
}

export interface IDirector {
	id: number
	name: string
}

export interface ICountry {
	id: number
	name: string
}

export interface IFilm {
	id: number
	playerLink: string
	title: string
	titleOrig: string
	description: string
	year: number
	poster: string
	rating: number
	minimalAge?: number
	duration: number
	genres: IGenre[]
	status: IStatus
	type: IType
	directors: IDirector[]
	countries: ICountry[]
}

export interface IGetAllByParams {
	statuses?: string
	genres?: string
	type?: 'film' | 'serial'
	years?: string
	rating?: 'asc' | 'desc'
	title?: 'asc' | 'desc'
	page?: number
}

export interface IStatus {
	id: number
	name: string
	value: string
}

export interface IFilter {
	genres: IGenre[]
	statuses: IStatus[]
}
