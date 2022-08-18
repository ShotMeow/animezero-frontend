import { FC } from 'react'
import styles from '@/components/pages/Profile/Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import Layout from '@/components/Layout/Layout'
import Field from '@/components/ui/Field/Field'
import Button from '@/components/ui/Button/Button'

const Settings: FC = () => {
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<div>
					<h2>Настройки</h2>
					<form>
						<label>
							Новый никнейм
							<Field type='text' placeholder='Пиши сюда новый логин' />
						</label>
						<label>
							Другой почтовый адрес
							<Field type='email' placeholder='Диктуй почту' />
						</label>
						<label>
							Поменять пароль
							<Field type='password' placeholder='Тут старый пароль' />
							<Field type='password' placeholder='Сюда новый пароль' />
							<Field
								type='password'
								placeholder='Точно запомнил новый пароль?'
							/>
						</label>
						<Button important='primary'>Сохранить изменения</Button>
					</form>
				</div>
			</section>
		</Layout>
	)
}

export default Settings
