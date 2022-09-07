import { NextPageAuth } from '@/app/providers/private-route.interface'
import Viewed from '@/app/components/profile/Viewed'

const ViewedPage: NextPageAuth = () => {
	return <Viewed />
}

ViewedPage.isOnlyUser = true

export default ViewedPage
