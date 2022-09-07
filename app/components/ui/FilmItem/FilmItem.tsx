import styles from './FilmItem.module.scss'
import Button from '@/app/components/ui/Button/Button'
import { ratingReduceHelper } from '@/app/helpers/rating-reduce.helper'
import NextLink from '@/app/components/ui/NextLink'
import { IFilm } from '@/app/interfaces/IFilm'
import Image from 'next/image'

interface IFilmItemProps {
	film: IFilm
}

export default function FilmItem(props: IFilmItemProps) {
	return (
		<NextLink href={`/movies/${props.film.id}`}>
			<article className={styles.film}>
				<span>{ratingReduceHelper(props.film.rating)}</span>
				<header>
					<Image src={props.film.poster} alt={props.film.title} loading='lazy' />
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
