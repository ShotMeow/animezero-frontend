import { IFilm } from '@/app/interfaces/IFilm'

export const randomFilmHelper = (films: IFilm[]) => {
	const randomNumber = Math.floor(Math.random() * films.length)
	const randomFilm = films[randomNumber]
	return randomFilm.id
}
