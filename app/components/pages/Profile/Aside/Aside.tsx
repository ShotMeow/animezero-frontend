import { FC } from 'react'
import styles from '../Profile.module.scss'
import { asideNav } from '@/components/pages/Profile/Aside/Aside.data'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { api } from '@/store/api/api'
import { AiOutlineUser } from 'react-icons/ai'

const Aside: FC = () => {
	const { asPath } = useRouter()

	const { data, isSuccess } = api.useGetProfileDataQuery()

	return (
		<aside className={styles.aside}>
			{isSuccess && (
				<>
					{data.avatar ? (
						<img src={data.avatar} alt='Аватар' />
					) : (
						<div>
							<AiOutlineUser size={60} />
						</div>
					)}
					<h3>{data.login}</h3>
					<p>{data.email}</p>
				</>
			)}
			<ul>
				{asideNav.map(item => (
					<li key={item.url}>
						<Link href={item.url}>
							<a className={asPath === item.url ? styles.active : ''}>
								{item.value}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default Aside
