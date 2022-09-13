import { NextPageAuth } from '@/app/providers/private-route.interface';
import Tracked from '@/app/components/profile/Tracked';

const TrackedPage: NextPageAuth = () => {
	return <Tracked />;
};

TrackedPage.isOnlyUser = true;

export default TrackedPage;
