import { FC } from 'react'
import styles from './FilmItem.module.scss'
import Link from 'next/link'
import Button from '@/components/ui/Button/Button'
import { IFilm } from '@/services/films.interface'

const FilmItem: FC<{ film: IFilm }> = ({ film }) => {
	return (
		<article>
			<Link href={`films/${film.id}`}>
				<a>
					<div className={styles.film}>
						{Number.isInteger(film.rating) ? (
							<span>{film.rating}.0</span>
						) : (
							<span>{film.rating}</span>
						)}
						<header>
							<img src={film.poster} alt={film.title} />
							<Button important='primary'>Смотреть</Button>
						</header>
						<footer>
							<h3>{film.title}</h3>
							<p>
								{film.year} {film.genres[0].name}
							</p>
						</footer>
					</div>
				</a>
			</Link>
		</article>
	)
}

export default FilmItem
