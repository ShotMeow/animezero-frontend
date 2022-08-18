import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { api } from '../../../../app/store/api/api'
import { IVerify } from '@/services/auth/auth.helper'

const Hash: FC = () => {
	const router = useRouter()
	const [verify] = api.useLazyVerifyQuery(router.query)

	useEffect(() => {
		if (router.isReady) {
			verify(router.query as unknown as IVerify)
		}
	}, [router.isReady])

	return <></>
}

export default Hash
