import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import styles from './Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import { api } from '@/store/api/api'
import FilmItem from '@/components/ui/FilmItem/FilmItem'

const Profile: FC = () => {
	const { data } = api.useShowTrackedFilmsQuery()
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<div>
					<h2>Отслеживаемое</h2>
					<div>
						{data &&
							data.data.map(film => <FilmItem key={film.id} film={film} />)}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Profile
