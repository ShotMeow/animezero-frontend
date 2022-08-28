import { FC } from 'react'
import { IFilm } from '@/services/films.interface'
import styles from './ProfileCard.module.scss'
import Link from 'next/link'

const ProfileCard: FC<{ film: IFilm }> = ({ film }) => {
	return (
		<Link href={`/films/${film.id}`}>
			<a>
				<article
					style={{ backgroundImage: `url(${film.poster})` }}
					className={styles.film}
				>
					<h3>
						{film.title} <br /> ({film.year})
					</h3>
				</article>
			</a>
		</Link>
	)
}

export default ProfileCard
