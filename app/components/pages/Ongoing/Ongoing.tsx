import { FC } from 'react'
import Layout from '@/app/components/Layout/Layout'
import Heading from '@/app/components/ui/Heading/Heading'
import styles from './Ongoing.module.scss'
import OngoingFilm from '@/app/components/ui/OngoingFilm/OngoingFilm'
import { IFilm } from '@/app/services/films.interface'

const Ongoing: FC<{ films: IFilm[] }> = ({ films }) => {
	return (
		<Layout title='AnimeZero - Онгоинги'>
			<Heading
				catalog='Онгоинги'
				title='Онгоинги'
				description='На данной странице вы можете увидеть список самых актуальных выходящих аниме.'
			/>
			<section className={styles.films}>
				{films.length &&
					films.map(film => <OngoingFilm film={film} key={film.id} />)}
			</section>
		</Layout>
	)
}

export default Ongoing
