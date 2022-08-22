import { FC } from 'react'
import Button from '@/components/ui/Button/Button'
import { BiLogIn } from 'react-icons/bi'

import styles from './Profile.module.scss'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { setIsShow } from '@/store/modal/modal.slice'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import Link from 'next/link'

const Profile: FC = () => {
	const dispatch = useTypedDispatch()
	const login = useTypedSelector(store => store.auth.user.login)

	const handleClick = () => {
		dispatch(setIsShow())
	}

	return (
		<>
			{login ? (
				<Link href={'/profile'}>
					<a>
						<Button important='primary'>{login}</Button>
					</a>
				</Link>
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
