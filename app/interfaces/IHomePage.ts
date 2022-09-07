import { IFilm } from '@/app/services/films.interface'

export interface IHomePage {
	best: IFilm[]
	newest: IFilm[]
	ongoing: IFilm[]
	recommended: IFilm[]
}
