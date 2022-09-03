import { NextPageAuth } from '../../app/providers/private-route.interface'
import Recently from '@/components/pages/Profile/Recently/Recently'

const RecentlyPage: NextPageAuth = () => {
	return <Recently />
}

RecentlyPage.isOnlyUser = true

export default RecentlyPage
