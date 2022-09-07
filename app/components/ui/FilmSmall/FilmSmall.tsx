import styles from './FilmSmall.module.scss'
import Tag from '@/app/components/ui/Tag/Tag'
import NextLink from '@/app/components/ui/NextLink'
import { IFilm } from '@/app/interfaces/IFilm'

interface IFilmSmallProps {
	film: IFilm
}

export default function FilmSmall(props: IFilmSmallProps) {
	return (
		<NextLink href={`/movies/${props.film.id}`}>
			<article className={styles.film_small}>
				<div style={{ backgroundImage: `url(${props.film.poster})` }} />
				<div className={styles.about}>
					<div className={styles.tags}>
						<Tag title='Топ-100' />
						<Tag title='Детям' />
					</div>
					<h3>{props.film.title}</h3>
					<p>{props.film.description}</p>
				</div>
			</article>
		</NextLink>
	)
}
