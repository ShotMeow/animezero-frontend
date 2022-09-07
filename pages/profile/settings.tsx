import { NextPageAuth } from '@/app/providers/private-route.interface'
import Settings from '@/app/components/pages/Profile/Settings/Settings'

const SettingsPage: NextPageAuth = () => {
	return <Settings />
}

SettingsPage.isOnlyUser = true

export default SettingsPage
