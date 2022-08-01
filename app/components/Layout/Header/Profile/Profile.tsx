import { FC } from 'react'
import Button from '@/components/ui/Button/Button'
import { BiLogIn } from 'react-icons/bi'

import styles from './Profile.module.scss'

const Profile: FC = () => {
	return (
		<Button important='primary' className={styles.profile}>
			<BiLogIn size={20} />
			Войти
		</Button>
	)
}

export default Profile
