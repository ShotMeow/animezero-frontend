import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import styles from './Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import { api } from '@/store/api/api'
import ProfileBody from '@/components/ui/ProfileBody/ProfileBody'

const Profile: FC = () => {
	const { data, isSuccess } = api.useShowTrackedFilmsQuery()
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<ProfileBody
					title='Отслеживаемое'
					films={data?.data}
					isSuccess={isSuccess}
				/>
			</section>
		</Layout>
	)
}

export default Profile
