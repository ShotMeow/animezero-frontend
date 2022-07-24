import { FC } from 'react'
import { navData } from './Nav.data'
import NavItem from '@/components/Layout/Header/Nav/NavItem'

import styles from './Nav.module.scss'

const Nav: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navData.map(item => (
					<NavItem item={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default Nav
