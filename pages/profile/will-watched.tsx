import { NextPageAuth } from '../../app/providers/private-route.interface'
import WillWatched from '@/components/pages/Profile/WillWatched/WillWatched'

const WillWatchedPage: NextPageAuth = () => {
	return <WillWatched />
}

WillWatchedPage.isOnlyUser = true

export default WillWatchedPage
