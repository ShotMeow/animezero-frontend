import { FC } from 'react'
import styles from '@/components/pages/Profile/Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import Layout from '@/components/Layout/Layout'
import Field from '@/components/ui/Field/Field'
import Button from '@/components/ui/Button/Button'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IRegisterFields } from '@/components/ui/Modal/Modal.interface'
import { api } from '@/store/api/api'
import { IUserUpdate } from '@/types/user.interface'
import { changeType, setIsShow } from '@/store/modal/modal.slice'
import { setData } from '@/store/update/update.slice'

const Settings: FC = () => {
	const [requestCode] = api.useRequestCodeMutation()
	const dispatch = useTypedDispatch()

	const {
		register,
		setError,
		formState: { errors },
		handleSubmit
	} = useForm<IRegisterFields>({
		mode: 'onChange'
	})

	const onChangeSubmit: SubmitHandler<IUserUpdate> = data => {
		if (data.login || data.email || data.password) {
			if (data.password) {
				if (data.password !== data.password_repeat) {
					return setError('password_repeat', { message: 'Пароли не совпадают' })
				}
			}
			requestCode().then(res => {
				// @ts-ignore
				if (!res.error) {
					dispatch(setData(data))
					dispatch(setIsShow())
					dispatch(changeType('update-verify'))
				}
			})
		}
	}

	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<div>
					<h2>Настройки</h2>
					<form
						onSubmit={handleSubmit(onChangeSubmit)}
						className={styles.settings}
					>
						<label>
							Новый никнейм
							<Field
								{...register('login', {})}
								error={errors.login}
								type='text'
								placeholder='Пиши сюда новый логин'
							/>
						</label>
						<label>
							Другой почтовый адрес
							<Field
								{...register('email', {})}
								error={errors.email}
								type='email'
								placeholder='Диктуй почту'
							/>
						</label>
						<label>
							Поменять пароль
							<Field
								{...register('password', {
									minLength: {
										value: 8,
										message: 'Пароль слишком короткий'
									}
								})}
								error={errors.password}
								type='password'
								placeholder='Сюда новый пароль'
							/>
							<Field
								{...register('password_repeat', {
									minLength: {
										value: 8,
										message: 'Пароль слишком короткий'
									}
								})}
								error={errors.password_repeat}
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
