import Link from 'next/link'
import { FC } from 'react'

import styles from './Header.module.scss'
import Nav from '@/components/Layout/Header/Nav/Nav'
import Search from '@/components/Layout/Header/Search/Search'
import Profile from '@/components/Layout/Header/Profile/Profile'
import Menu from '@/components/Layout/Header/Menu/Menu'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div>
				<Link href='/catalog'>
					<a>
						Anime<span>Zero</span>
					</a>
				</Link>
				<Nav />
				<Search />
				<Profile />
			</div>
			<Menu />
		</header>
	)
}

export default Header
