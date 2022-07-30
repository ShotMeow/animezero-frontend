export type BlockTypes = 'best' | 'newest' | 'ongoing' | 'recommended'

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
	genres: string[]
}

export interface IHomePage {
	best: IFilm[]
	newest: IFilm[]
	ongoing: IFilm[]
	recommended: IFilm[]
}
