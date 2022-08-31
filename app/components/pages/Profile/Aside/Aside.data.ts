import { IAsideNav } from '@/components/pages/Profile/Aside/Aside.interface'

export const asideNav: IAsideNav[] = [
	{
		value: 'Недавно просмотренные',
		url: '/profile'
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
