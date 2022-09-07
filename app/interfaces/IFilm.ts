import { IStatus } from '@/app/services/films.interface'
import { IType } from '@/app/interfaces/IType'
import { IGenre } from '@/app/interfaces/IGenre'
import { IDirector } from '@/app/interfaces/IDirector'
import { ICountry } from '@/app/interfaces/ICountry'

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
