import { PropsWithChildren } from 'react';
import { TypeComponentAuthFields } from './private-route.interface';
import { useAuth } from '@/app/hooks/useAuth';
import { useRouter } from 'next/router';

export default function CheckRole(props: PropsWithChildren<TypeComponentAuthFields>) {
	const { isLoading, token } = useAuth();
	const { replace, pathname } = useRouter();

	const Children = () => <>{props.children}</>;

	if (isLoading) {
		return null;
	}

	if (token) {
		return <Children />;
	}

	if (props.Component.isOnlyUser) {
		pathname !== '/' && replace('/');
	}

	return null;
}
