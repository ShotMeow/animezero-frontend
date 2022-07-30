import { FC } from 'react'
import { IBigFilm } from '@/components/ui/FilmBig/FilmBig.interface'

import styles from './FilmBig.module.scss'
import Button from '@/components/ui/Button/Button'
import Tag from '@/components/ui/Tag/Tag'

const FilmBig: FC<IBigFilm> = ({ title, imageUrl, description, rating }) => {
	return (
		<article
			className={styles.film_big}
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<div className={styles.tags}>
				<div>
					<Tag title='Топ-100' />
					<Tag title='Детям' />
				</div>
				<Tag title={rating} black={true} bold={true} />
			</div>
			<div className={styles.about}>
				<div>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<Button>Смотреть</Button>
			</div>
		</article>
	)
}

export default FilmBig
