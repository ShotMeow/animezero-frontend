import { FC } from 'react'
import styles from '@/components/pages/Profile/Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import Layout from '@/components/Layout/Layout'

const WillWatched: FC = () => {
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<div>
					<h2>Буду смотреть</h2>
				</div>
			</section>
		</Layout>
	)
}

export default WillWatched
