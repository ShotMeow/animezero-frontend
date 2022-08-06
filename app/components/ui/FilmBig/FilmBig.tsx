import { FC } from 'react'
import styles from './FilmBig.module.scss'
import Button from '@/components/ui/Button/Button'
import Tag from '@/components/ui/Tag/Tag'
import Link from 'next/link'
import { IFilm } from '@/services/films.interface'

const FilmBig: FC<{ film: IFilm }> = ({ film }) => {
	return (
		<Link href={`films/${film.id}`}>
			<a>
				<article
					className={styles.film_big}
					style={{ backgroundImage: `url(${film.poster})` }}
				>
					<div className={styles.tags}>
						<div>
							<Tag title='Топ-100' />
							<Tag title='Детям' />
						</div>
						<Tag title={film.rating} black={true} bold={true} />
					</div>
					<div className={styles.about}>
						<div>
							<h3>{film.title}</h3>
							<p>{film.description}</p>
						</div>
						<Button important='primary'>Смотреть</Button>
					</div>
				</article>
			</a>
		</Link>
	)
}

export default FilmBig
