import { FC } from 'react'
import { IFilmSmall } from '@/components/ui/FilmSmall/FilmSmall.interface'

import styles from './FilmSmall.module.scss'
import Tag from '@/components/ui/Tag/Tag'
import Link from 'next/link'

const FilmSmall: FC<IFilmSmall> = ({ id, title, imageUrl, description }) => {
	return (
		<Link href={`films/${id}`}>
			<a>
				<article className={styles.film_small}>
					<div style={{ backgroundImage: `url(${imageUrl})` }} />
					<div className={styles.about}>
						<div className={styles.tags}>
							<Tag title='Топ-100' />
							<Tag title='Детям' />
						</div>
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
				</article>
			</a>
		</Link>
	)
}

export default FilmSmall
