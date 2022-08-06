import { FC } from 'react'
import styles from './Recommendations.module.scss'
import { BiStar } from 'react-icons/bi'
import Subtitle from '@/components/ui/Subtitle/Subtitle'
import FilmBig from '@/components/ui/FilmBig/FilmBig'
import FilmSmall from '@/components/ui/FilmSmall/FilmSmall'
import { IFilm } from '@/services/films.interface'

const Recommendations: FC<{ films: IFilm[] }> = ({ films }) => {
	return (
		<section className={styles.recommendations}>
			<header className={styles.heading}>
				<Subtitle title='Рекомендуемое для вас'>
					<BiStar size={24} />
				</Subtitle>
			</header>
			<footer>
				<FilmBig film={films[0]} />
				<FilmSmall film={films[1]} />
				<FilmSmall film={films[2]} />
			</footer>
		</section>
	)
}

export default Recommendations
