import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'
import { TypeComponentAuthFields } from './private-route.interface'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false
})

export const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	                                                                             Component: { isOnlyUser },
	                                                                             children
                                                                             }) => {
	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
	)
}
