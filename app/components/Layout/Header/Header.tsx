import Link from 'next/link'
import { FC } from 'react'

import styles from './Header.module.scss'
import Nav from '@/components/Layout/Header/Nav/Nav'
import Search from '@/components/Layout/Header/Search/Search'
import Profile from '@/components/Layout/Header/Profile/Profile'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Link href='/'>
				<a>
						Anime<span>Zero</span>
				</a>
			</Link>
			<Nav />
			<Search />
			<Profile />
		</header>
	)
}

export default Header
