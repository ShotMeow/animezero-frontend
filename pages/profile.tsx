import { NextPageAuth } from '../app/providers/private-route.interface'
import Recently from '@/components/pages/Profile/Recently/Recently'

const ProfilePage: NextPageAuth = () => {
	return <Recently />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
