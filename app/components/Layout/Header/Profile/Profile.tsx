import { FC } from 'react'
import Button from '@/components/ui/Button/Button'
import { BiLogIn } from 'react-icons/bi'

import styles from './Profile.module.scss'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { setIsShow } from '../../../../store/modal/modal.slice'

const Profile: FC = () => {
	const dispatch = useTypedDispatch()

	const handleClick = () => {
		dispatch(setIsShow())
	}

	return (
		<Button
			onClick={handleClick}
			important='primary'
			className={styles.profile}
		>
			<BiLogIn size={20} />
			Войти
		</Button>
	)
}

export default Profile
