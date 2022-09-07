import { NextPageAuth } from '@/app/providers/private-route.interface'
import Recently from '@/app/components/pages/Profile/Recently/Recently'

const RecentlyPage: NextPageAuth = () => {
	return <Recently />
}

RecentlyPage.isOnlyUser = true

export default RecentlyPage
