import { FC } from 'react'
import Field from '@/components/ui/Field/Field'
import Button from '@/components/ui/Button/Button'
import { changeType } from '../../../../store/modal/modal.slice'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IRegisterFields } from '@/components/ui/Modal/Modal.interface'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const Register: FC = () => {
	const dispatch = useTypedDispatch()

	const { register: registerAction } = useActions()

	const { isLoading } = useAuth()

	const {
		register,
		setError,
		formState: { errors },
		handleSubmit
	} = useForm<IRegisterFields>({
		mode: 'onChange'
	})

	const onRegisterSubmit: SubmitHandler<IRegisterFields> = data => {
		if (data.password !== data.repeat_password)
			return setError('repeat_password', {
				message: 'Пароли не совпадают'
			})
		dispatch(changeType('login'))
		registerAction(data)
	}

	return (
		<form onSubmit={handleSubmit(onRegisterSubmit)}>
			<div>
				<h3>Регистрация</h3>
				<p>Познакомимся?</p>
			</div>
			<div>
				<Field
					{...register('login', {
						required: 'Введите логин'
					})}
					error={errors.login}
					label='Как тебя называть?'
					placeholder='Логин'
					type='text'
				/>
				<Field
					{...register('email', {
						required: 'Введите E-mail'
					})}
					error={errors.email}
					label='А твоя почта?'
					type='email'
					placeholder='Электронная почта'
				/>
				<Field
					{...register('password', {
						required: 'Введите пароль',
						minLength: {
							value: 8,
							message: 'Пароль слишком короткий'
						}
					})}
					error={errors.password}
					label='И пароль :)'
					type='password'
					placeholder='Пароль'
				/>
				<Field
					{...register('repeat_password', {
						required: 'Повторите пароль'
					})}
					error={errors.repeat_password}
					label='Точно запомнил?'
					type='password'
					placeholder='Подтвердите пароль'
				/>
				<Button disabled={isLoading} important='primary'>
					Зарегистрироваться
				</Button>
			</div>
			<div>
				<p>Уже есть аккаунт?</p>
				<button
					onClick={() => dispatch(changeType('login'))}
					disabled={isLoading}
				>
					Авторизоваться
				</button>
			</div>
		</form>
	)
}

export default Register
