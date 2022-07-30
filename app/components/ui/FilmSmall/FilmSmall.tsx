import { FC } from 'react'
import { IFilmSmall } from '@/components/ui/FilmSmall/FilmSmall.interface'

import styles from './FilmSmall.module.scss'
import Tag from '@/components/ui/Tag/Tag'

const FilmSmall: FC<IFilmSmall> = ({ title, imageUrl, description }) => {
	return (
		<article className={styles.film_small}>
			<div style={{ backgroundImage: `url(${imageUrl})` }}></div>
			<div className={styles.about}>
				<div className={styles.tags}>
					<Tag title='Топ-100' />
					<Tag title='Детям' />
				</div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</article>
	)
}

export default FilmSmall
