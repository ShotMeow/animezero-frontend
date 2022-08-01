export type BlockTypes = 'best' | 'newest' | 'ongoing' | 'recommended'

interface IFilmType {
	id: number
	name: string
	value: string
}

export interface IFilm extends IBaseFilm {
	type?: IFilmType
}

export interface IBaseFilm {
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
	genres: string[]
}

export interface IHomePage {
	best: IFilm[]
	newest: IFilm[]
	ongoing: IFilm[]
	recommended: IBaseFilm[]
}

export interface ICurrentFilm {
	film: IFilm
}
