import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';
import { TypeComponentAuthFields } from './private-route.interface';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false
});

export function AuthProvider(props: PropsWithChildren<TypeComponentAuthFields>) {
	return !props.Component.isOnlyUser ? (
		<>{props.children}</>
	) : (
		<DynamicCheckRole Component={props.Component}>{props.children}</DynamicCheckRole>
	);
}
