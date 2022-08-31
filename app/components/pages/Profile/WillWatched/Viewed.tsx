import { FC } from 'react'
import styles from '@/components/pages/Profile/Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import Layout from '@/components/Layout/Layout'
import { api } from '@/store/api/api'
import ProfileBody from '@/components/ui/ProfileBody/ProfileBody'
import { useRouter } from 'next/router'

const Viewed: FC = () => {
	const { query } = useRouter()
	const { data, isSuccess } = api.useShowViewedFilmsQuery(
		query.page !== undefined ? `?page=${query.page}` : '',
		{ refetchOnMountOrArgChange: true }
	)
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<ProfileBody
					title='Просмотрено'
					films={data?.data}
					isSuccess={isSuccess}
					pagination={data?.meta.links}
				/>
			</section>
		</Layout>
	)
}

export default Viewed