import styles from '@/app/styles/components/Nav.module.scss';
import { useRouter } from 'next/router';
import { INavItem } from '@/app/interfaces/INavItem';
import NextLink from '@/app/components/ui/NextLink';

interface INavItemProps {
	item: INavItem;
}

export default function NavItem(props: INavItemProps) {
	const { pathname } = useRouter();
	return (
		<li>
			<NextLink href={props.item.link} className={pathname === props.item.link ? styles.active : ''}>
				{props.item.title}
			</NextLink>
		</li>
	);
}
