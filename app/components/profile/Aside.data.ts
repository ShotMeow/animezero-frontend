import { IAsideNavItem } from '@/app/interfaces/IAsideNavItem';

export const asideNav: IAsideNavItem[] = [
	{
		value: 'Недавно просмотренные',
		url: '/profile/recently'
	},
	{
		value: 'Отслеживаемое',
		url: '/profile/tracked'
	},
	{
		value: 'Просмотрено',
		url: '/profile/viewed'
	},
	{
		value: 'Настройки',
		url: '/profile/settings'
	}
];
