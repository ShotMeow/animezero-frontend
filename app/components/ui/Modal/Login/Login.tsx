import { FC } from 'react'
import Field from '@/components/ui/Field/Field'
import Button from '@/components/ui/Button/Button'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ILoginFields } from '@/components/ui/Modal/Modal.interface'
import { changeType, setIsShow } from '@/store/modal/modal.slice'
import { login } from '@/store/auth/auth.actions'

const Login: FC = () => {
	const dispatch = useTypedDispatch()

	const {
		register,
		setError,
		formState: { errors },
		handleSubmit
	} = useForm<ILoginFields>({
		mode: 'onChange'
	})

	const onLoginSubmit: SubmitHandler<ILoginFields> = data => {
		dispatch(login(data))
			.then(() => {
				dispatch(setIsShow())
			})
			.catch(() => {
				setError('password', { message: 'Неверный логин или пароль' })
			})
	}

	return (
		<form onSubmit={handleSubmit(onLoginSubmit)}>
			<div>
				<h3>Вход</h3>
				<p>С возвращением!</p>
			</div>
			<div>
				<Field
					{...register('login', {
						required: 'Введите логин'
					})}
					error={errors.login}
					label='Напомнишь свой логин?'
					type='text'
					placeholder='Логин'
				/>
				<Field
					{...register('password', {
						required: 'Введите пароль'
					})}
					error={errors.password}
					label='И пароль :)'
					type='password'
					placeholder='Пароль'
				/>
				<Button important='primary'>Войти</Button>
			</div>
			<div>
				<p>Ещё нет аккаунта?</p>
				<button onClick={() => dispatch(changeType('register'))}>
					Зарегистрироватьтся
				</button>
			</div>
		</form>
	)
}

export default Login
