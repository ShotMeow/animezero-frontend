import { NextPageAuth } from '@/app/providers/private-route.interface';
import Recently from '@/app/components/profile/Recently';

const RecentlyPage: NextPageAuth = () => {
	return <Recently />;
};

RecentlyPage.isOnlyUser = true;

export default RecentlyPage;
