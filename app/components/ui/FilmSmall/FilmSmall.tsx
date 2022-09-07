import { FC } from 'react'
import styles from './FilmSmall.module.scss'
import Tag from '@/app/components/ui/Tag/Tag'
import Link from 'next/link'
import { IFilm } from '@/app/services/films.interface'

const FilmSmall: FC<{ film: IFilm }> = ({ film }) => {
	return (
		<Link href={`/movies/${film.id}`}>
			<a>
				<article className={styles.film_small}>
					<div style={{ backgroundImage: `url(${film.poster})` }} />
					<div className={styles.about}>
						<div className={styles.tags}>
							<Tag title='Топ-100' />
							<Tag title='Детям' />
						</div>
						<h3>{film.title}</h3>
						<p>{film.description}</p>
					</div>
				</article>
			</a>
		</Link>
	)
}

export default FilmSmall
