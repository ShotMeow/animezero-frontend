import styles from './FilmItem.module.scss'
import Button from '@/app/components/ui/Button/Button'
import { ratingReduceHelper } from '@/app/helpers/rating-reduce.helper'
import NextLink from '@/app/components/ui/NextLink'
import { IFilm } from '@/app/interfaces/IFilm'

interface IFilmItemProps {
	film: IFilm
}

export default function FilmItem(props: IFilmItemProps) {
	return (
		<NextLink href={`/movies/${props.film.id}`}>
			<article className={styles.film}>
				<span>{ratingReduceHelper(props.film.rating)}</span>
				<header>
					<img src={props.film.poster} alt={props.film.title} width={200} height={280} />
					<Button important='primary'>Смотреть</Button>
				</header>
				<footer>
					<h3>{props.film.title}</h3>
					<p>{props.film.genres?.at(0) && props.film.genres?.at(0)?.name}</p>
				</footer>
			</article>
		</NextLink>
	)
}
