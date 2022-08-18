import { FC } from 'react'
import { useRouter } from 'next/router'
import { AuthService } from '@/services/auth/auth.service'

const Hash: FC = () => {
	const router = useRouter()
	const query = router.query

	AuthService.verify(query)

	return <></>
}

export default Hash
