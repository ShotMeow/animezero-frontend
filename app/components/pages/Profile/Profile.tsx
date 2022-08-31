import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import styles from './Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import { api } from '@/store/api/api'
import ProfileBody from '@/components/ui/ProfileBody/ProfileBody'
import { useRouter } from 'next/router'

const Profile: FC = () => {
	const { query } = useRouter()
	const { data, isSuccess } = api.useShowWatchedFilmsQuery(
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
					pagination={data?.meta.links}
				/>
			</section>
		</Layout>
	)
}

export default Profile
