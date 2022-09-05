import { FC } from 'react'
import Button from '@/components/ui/Button/Button'
import { BiLogIn } from 'react-icons/bi'

import styles from './Profile.module.scss'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { setIsShow } from '@/store/modal/modal.slice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { api } from '@/store/api/api'
import { logout } from '@/store/auth/auth.actions'
import { profileApi } from '@/store/api/profile.api'

const Profile: FC = () => {
	const dispatch = useTypedDispatch()
	const { asPath, push } = useRouter()
	const { isSuccess } = profileApi.useGetProfileDataQuery('')
	const [logoutMutation] = api.useLogoutMutation()

	const handleClick = () => {
		dispatch(setIsShow())
	}

	const handleLogout = () => {
		logoutMutation()
		dispatch(logout())
		push('/')
	}

	return (
		<>
			{isSuccess ? (
				<div className={styles.action}>
					{asPath.includes('profile') ? (
						<Button onClick={handleLogout} important='primary'>
							Выйти
						</Button>
					) : (
						<Link href={'/profile/recently'}>
							<a>
								<Button important='primary'>Профиль</Button>
							</a>
						</Link>
					)}
				</div>
			) : (
				<Button
					onClick={handleClick}
					important='primary'
					className={styles.profile}
				>
					<BiLogIn size={20} />
					Войти
				</Button>
			)}
		</>
	)
}

export default Profile
