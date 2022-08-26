import { FC } from 'react'
import styles from './OngoingFilm.module.scss'
import Button from '@/components/ui/Button/Button'
import { ageCompileHelper } from '@/helpers/age-compile.helper'
import { IFilm } from '@/services/films.interface'

const OngoingFilm: FC<{ film: IFilm }> = ({ film }) => {
	const genres = [film.genres[0].name, film.genres[1].name]
	return (
		<article className={styles.ongoing_film}>
			<img src={film.poster} alt={film.title} />
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
				<Button important='primary'>Отслеживать</Button>
			</div>
		</article>
	)
}

export default OngoingFilm
