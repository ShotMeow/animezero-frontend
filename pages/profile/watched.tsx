import { NextPageAuth } from '../../app/providers/private-route.interface'
import Watched from '@/components/pages/Profile/Watched/Watched'

const WatchedPage: NextPageAuth = () => {
	return <Watched />
}

WatchedPage.isOnlyUser = true

export default WatchedPage
