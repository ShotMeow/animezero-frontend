import { NextPageAuth } from '@/app/providers/private-route.interface'
import Recently from '@/app/components/profile/Recently'

const ProfilePage: NextPageAuth = () => {
	return <Recently />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
