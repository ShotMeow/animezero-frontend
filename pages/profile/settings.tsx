import { NextPageAuth } from '@/app/providers/private-route.interface';
import Settings from '@/app/components/profile/Settings';

const SettingsPage: NextPageAuth = () => {
	return <Settings />;
};

SettingsPage.isOnlyUser = true;

export default SettingsPage;
