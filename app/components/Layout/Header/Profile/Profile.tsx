import { FC } from 'react'
import Button from '@/components/ui/Button/Button'
import { BiLogIn } from 'react-icons/bi'

const Profile: FC = () => {
	return (
		<Button>
			<BiLogIn size={20} />
			Войти
		</Button>
	)
}

export default Profile
