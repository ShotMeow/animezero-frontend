import { NextPageAuth } from '../app/providers/private-route.interface'
import Profile from '@/components/pages/Profile/Profile'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
