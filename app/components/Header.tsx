import styles from '../styles/components/Header.module.scss'
import Nav from '@/app/components/Nav'
import Search from '@/app/components/Search'
import Profile from '@/app/components/Profile'
import Menu from '@/app/components/Menu'
import NextLink from '@/app/components/ui/NextLink'

export default function Header() {
	return (
		<header className={styles.header}>
			<div>
				<NextLink href={'/'}>
					Anime<span>Zero</span>
				</NextLink>
				<Nav />
				<Search />
				<Profile />
			</div>
			<Menu />
		</header>
	)
}
