import NavItem from '@/app/components/NavItem';
import styles from '@/app/styles/components/Nav.module.scss';
import { INavItem } from '@/app/interfaces/INavItem';

export default function Nav() {
	const navData: INavItem[] = [
		{
			title: 'Каталог',
			link: '/'
		},
		{
			title: 'Фильмы',
			link: '/films'
		},
		{
			title: 'Сериалы',
			link: '/serials'
		}
	];

	return (
		<nav className={styles.nav}>
			<ul>
				{navData.map(item => (
					<NavItem item={item} key={item.link} />
				))}
			</ul>
		</nav>
	);
}
