import { FC, PropsWithChildren } from 'react'
import { TypeComponentAuthFields } from './private-route.interface'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	const { isLoading, token } = useAuth()
	const { replace, pathname } = useRouter()

	const Children = () => <>{children}</>

	if (isLoading) return null

	if (token) return <Children />

	if (isOnlyUser) pathname !== '/' && replace('/')

	return null
}

export default CheckRole
