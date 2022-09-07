import { IAsideNav } from '@/app/components/profile/Aside.interface'

export const asideNav: IAsideNav[] = [
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
]
