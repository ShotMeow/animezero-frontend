import { FC } from 'react'
import styles from '../Profile.module.scss'
import { asideNav } from '@/components/pages/Profile/Aside/Aside.data'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Aside: FC = () => {
	const { asPath } = useRouter()
	return (
		<aside className={styles.aside}>
			<img
				src='https://slovnet.ru/wp-content/uploads/2019/01/53-9.jpg'
				alt='Аватар'
			/>
			<h3>GhoulZXC</h3>
			<p>email@mail.ru</p>
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
