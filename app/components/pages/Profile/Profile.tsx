import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import styles from './Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import ProfileBody from '@/components/ui/ProfileBody/ProfileBody'
import { useRouter } from 'next/router'
import { profileApi } from '@/store/api/profile.api'

const Profile: FC = () => {
	const { query } = useRouter()
	const { data, isSuccess } = profileApi.useShowWatchedFilmsQuery(
		query.page !== undefined ? `?page=${query.page}` : '',
		{ refetchOnMountOrArgChange: true }
	)
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<ProfileBody
					title='Недавно просмотренные'
					films={data?.data}
					isSuccess={isSuccess}
					meta={data?.meta}
				/>
			</section>
		</Layout>
	)
}

export default Profile
