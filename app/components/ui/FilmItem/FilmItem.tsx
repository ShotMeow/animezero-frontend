import { FC } from 'react'
import { IFilmSmall } from '@/components/ui/FilmItem/FilmItem.interface'
import styles from './FilmItem.module.scss'
import Link from 'next/link'
import Button from '@/components/ui/Button/Button'

const FilmItem: FC<IFilmSmall> = ({
	id,
	title,
	image_url,
	grade,
	year,
	genre
}) => {
	return (
		<Link href={`films/${id}`}>
			<a>
				<article className={styles.film}>
					<span>{grade}</span>
					<header>
						<img src={image_url} alt={title} />
						<Button important='primary'>Смотреть</Button>
					</header>
					<footer>
						<h3>{title}</h3>
						<p>
							{year} {genre}
						</p>
					</footer>
				</article>
			</a>
		</Link>
	)
}

export default FilmItem
