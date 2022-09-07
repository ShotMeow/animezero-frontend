import { FC } from 'react'
import Button from '@/app/components/ui/Button/Button'
import { BiLogIn } from 'react-icons/bi'

import styles from './Profile.module.scss'
import { useTypedDispatch } from '@/app/hooks/useTypedDispatch'
import { setIsShow } from '@/app/store/modal/modal.slice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { api } from '@/app/store/api/api'
import { logout } from '@/app/store/auth/auth.actions'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'

const Profile: FC = () => {
	const dispatch = useTypedDispatch()
	const { asPath, push } = useRouter()
	const token = useTypedSelector(store => store.auth.token)
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
			{token ? (
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
