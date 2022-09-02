import { ChangeEvent, FC, useState } from 'react'
import styles from '@/components/pages/Profile/Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import Layout from '@/components/Layout/Layout'
import Field from '@/components/ui/Field/Field'
import Button from '@/components/ui/Button/Button'

const Settings: FC = () => {
	const [login, setLogin] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [repeatPassword, setRepeatPassword] = useState<string>('')
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<div>
					<h2>Настройки</h2>
					<div className={styles.settings}>
						<label>
							Новый никнейм
							<Field
								type='text'
								placeholder='Пиши сюда новый логин'
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setLogin(e.target.value)
								}
							/>
						</label>
						<label>
							Другой почтовый адрес
							<Field
								type='email'
								placeholder='Диктуй почту'
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setEmail(e.target.value)
								}
							/>
						</label>
						<label>
							Поменять пароль
							<Field
								type='password'
								placeholder='Сюда новый пароль'
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setPassword(e.target.value)
								}
							/>
							<Field
								type='password'
								placeholder='Точно запомнил новый пароль?'
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setRepeatPassword(e.target.value)
								}
							/>
						</label>
						<Button important='primary'>Сохранить изменения</Button>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Settings
