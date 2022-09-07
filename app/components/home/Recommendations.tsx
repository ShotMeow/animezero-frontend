import styles from '../../styles/Recommendations.module.scss'
import { BiStar } from 'react-icons/bi'
import Subtitle from '@/app/components/ui/Subtitle/Subtitle'
import FilmBig from '@/app/components/ui/FilmBig/FilmBig'
import FilmSmall from '@/app/components/ui/FilmSmall/FilmSmall'
import { IFilm } from '@/app/interfaces/IFilm'

interface IRecommendationsProps {
	films: IFilm[]
}

export default function Recommendations(props: IRecommendationsProps) {
	return (
		<section className={styles.recommendations}>
			<header className={styles.heading}>
				<Subtitle title='Рекомендуемое для вас'>
					<BiStar size={24} />
				</Subtitle>
			</header>
			<footer>
				<FilmBig film={props.films[0]} />
				<FilmSmall film={props.films[1]} />
				<FilmSmall film={props.films[2]} />
			</footer>
		</section>
	)
}
