import { FC } from 'react'
import styles from './Recommendations.module.scss'
import { BiStar } from 'react-icons/bi'
import Subtitle from '@/components/ui/Subtitle/Subtitle'
import FilmBig from '@/components/ui/FilmBig/FilmBig'
import FilmSmall from '@/components/ui/FilmSmall/FilmSmall'
import { IFilm } from '@/services/films.interface'

const Recommendations: FC<{ recommended: IFilm[] }> = ({ recommended }) => {
	return (
		<section className={styles.recommendations}>
			<header className={styles.heading}>
				<Subtitle title='Рекомендуемое для вас'>
					<BiStar size={24} />
				</Subtitle>
			</header>
			<footer>
				<FilmBig
					title={recommended[0].title}
					description={recommended[0].description}
					imageUrl={recommended[0].poster}
					rating={recommended[0].rating}
				/>

				<FilmSmall
					title={recommended[1].title}
					description={recommended[1].description}
					imageUrl={recommended[1].poster}
				/>
				<FilmSmall
					title={recommended[2].title}
					description={recommended[2].description}
					imageUrl={recommended[2].poster}
				/>
			</footer>
		</section>
	)
}

export default Recommendations
