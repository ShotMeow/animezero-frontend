import { FC } from 'react'
import styles from './OngoingFilm.module.scss'
import Button from '@/components/ui/Button/Button'
import { ageCompileHelper } from '@/helpers/age-compile.helper'
import { IFilm } from '@/services/films.interface'
import { filmsApi } from '@/store/api/films.api'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { toastr } from 'react-redux-toastr'
import Link from 'next/link'
import Image from 'next/image'

const OngoingFilm: FC<{ film: IFilm }> = ({ film }) => {
	const genres = [film.genres[0].name, film.genres[1].name]

	const [addTrackedFilm] = filmsApi.useAddTrackedFilmsMutation()
	const token = useTypedSelector(store => store.auth.token)
	const handleClick = () => {
		if (token) {
			addTrackedFilm(film.id).then(data => {
				// @ts-ignore
				if (!data.error) {
					toastr.success('Успех', 'Фильм добавлен в "Отслеживаемое"')
				} else {
					toastr.error('Ошибка', 'Фильм уже добавлен в "Отслеживаемое"')
				}
			})
		} else {
			toastr.error('Ошибка', 'Вы не авторизованы')
		}
	}
	return (
		<article className={styles.ongoing_film}>
			<Link href={`movies/${film.id}`}>
				<a>
					<Image width={180} height={248} src={film.poster} alt={film.title} />
				</a>
			</Link>
			<div>
				<h3>
					{film.title} ({film.year})
				</h3>
				<p className={styles.genres}>
					<span>Жанры: </span>
					<span>{genres.map(genre => genre).join(', ')}</span>
				</p>
				<p className={styles.ages}>
					Возрастной рейтинг: <span>{ageCompileHelper(film.minimalAge)}</span>
				</p>
				<Button onClick={handleClick} important='primary'>
					Отслеживать
				</Button>
			</div>
		</article>
	)
}

export default OngoingFilm
