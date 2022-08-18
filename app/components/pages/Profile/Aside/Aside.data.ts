import { IAsideNav } from '@/components/pages/Profile/Aside/Aside.interface'

export const asideNav: IAsideNav[] = [
	{
		value: 'Отслеживаемое',
		url: '/profile'
	},
	{
		value: 'Недавно просмотренные',
		url: '/profile/watched'
	},
	{
		value: 'Буду смотреть',
		url: '/profile/will-watched'
	},
	{
		value: 'Настройки',
		url: '/profile/settings'
	}
]
