import { FC } from 'react'
import { INavItem } from '@/components/Layout/Header/Nav/Nav.interface'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './Nav.module.scss'

const NavItem: FC<{ item: INavItem }> = ({ item }) => {
	const { asPath } = useRouter()
	return (
		<li>
			<Link href={item.link}>
				<a className={asPath === item.link ? styles.active : ''}>
					{item.title}
				</a>
			</Link>
		</li>
	)
}

export default NavItem
