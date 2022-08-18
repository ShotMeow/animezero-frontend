import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import styles from './Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'

const Profile: FC = () => {
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<div>
					<h2>Отслеживаемое</h2>
				</div>
			</section>
		</Layout>
	)
}

export default Profile
