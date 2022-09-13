import { FC } from 'react';
import Field from '@/app/components/ui/Field/Field';
import Button from '@/app/components/ui/Button/Button';
import { changeType } from '@/app/store/modal/modal.slice';
import { useTypedDispatch } from '@/app/hooks/useTypedDispatch';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegisterFields } from '@/app/components/ui/Modal/Modal.interface';
import { register as registration } from '../../../../store/auth/auth.actions';

const Register: FC = () => {
	const dispatch = useTypedDispatch();

	const {
		register,
		setError,
		formState: { errors },
		handleSubmit
	} = useForm<IRegisterFields>({
		mode: 'onChange'
	});

	const onRegisterSubmit: SubmitHandler<IRegisterFields> = data => {
		if (data.password !== data.password_repeat) {
			return setError('password_repeat', {
				message: 'Пароли не совпадают'
			});
		}
		dispatch(registration(data)).then(data => {
			// @ts-ignore
			if (!data.error) {
				return dispatch(changeType('verify'));
			} else {
				// @ts-ignore
				if (data.payload.response.data.errors.login) {
					setError('login', {
						message: 'Данный логин уже занят'
					});
				}

				// @ts-ignore
				if (data.payload.response.data.errors.email) {
					setError('email', {
						message: 'Данный E-mail уже занят'
					});
				}
			}
		});
	};

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
					{...register('password_repeat', {
						required: 'Повторите пароль'
					})}
					error={errors.password_repeat}
					label='Точно запомнил?'
					type='password'
					placeholder='Подтвердите пароль'
				/>
				<Button important='primary'>Зарегистрироваться</Button>
			</div>
			<div>
				<p>Уже есть аккаунт?</p>
				<button onClick={() => dispatch(changeType('login'))}>
					Авторизоваться
				</button>
			</div>
		</form>
	);
};

export default Register;
