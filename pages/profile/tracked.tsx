import { NextPageAuth } from '@/app/providers/private-route.interface'
import Tracked from '@/app/components/pages/Profile/Watched/Tracked'

const TrackedPage: NextPageAuth = () => {
	return <Tracked />
}

TrackedPage.isOnlyUser = true

export default TrackedPage
