import { IGenre } from '@/services/films.interface'

export interface IOngoingFilm {
	title: string
	imageUrl: string
	year: number
	genres: IGenre[]
	minimalAge?: number
}
