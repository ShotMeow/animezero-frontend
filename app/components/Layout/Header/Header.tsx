import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './Header.module.scss'
import Nav from '@/components/Layout/Header/Nav/Nav'
import Search from '@/components/Layout/Header/Search/Search'
import Profile from '@/components/Layout/Header/Profile/Profile'
import { BiMenu, BiSearch } from 'react-icons/bi'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<button className={styles.menu}><BiMenu size={32} /></button>
			<Link href='/'>
				<a>
						Anime<span>Zero</span>
				</a>
			</Link>
			<button className={styles.search}><BiSearch size={32} /></button>
			<Nav />
			<Search />
			<Profile />
		</header>
	)
}

export default Header
