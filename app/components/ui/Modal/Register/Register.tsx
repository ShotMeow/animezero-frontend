import Field from '@/app/components/ui/Field';
import Button from '@/app/components/ui/Button';
import { changeType } from '@/app/store/modal/modal.slice';
import { useTypedDispatch } from '@/app/hooks/useTypedDispatch';
import { SubmitHandler, useForm } from 'react-hook-form';
import { register as registration } from '../../../../store/auth/auth.actions';
import { IRegisterFields } from '@/app/interfaces/IRegisterFields';

export default function Register() {
	const dispatch = useTypedDispatch();

	const form = useForm<IRegisterFields>({
		mode: 'onChange'
	});

	const onRegisterSubmit: SubmitHandler<IRegisterFields> = data => {
		if (data.password !== data.password_repeat) {
			return form.setError('password_repeat', {
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
					form.setError('login', {
						message: 'Данный логин уже занят'
					});
				}

				// @ts-ignore
				if (data.payload.response.data.errors.email) {
					form.setError('email', {
						message: 'Данный E-mail уже занят'
					});
				}
			}
		});
	};

	return (
		<form onSubmit={form.handleSubmit(onRegisterSubmit)}>
			<div>
				<h3>Регистрация</h3>
				<p>Познакомимся?</p>
			</div>
			<div>
				<Field
					{...form.register('login', {
						required: 'Введите логин'
					})}
					error={form.formState.errors.login}
					label='Как тебя называть?'
					placeholder='Логин'
					type='text'
				/>
				<Field
					{...form.register('email', {
						required: 'Введите E-mail'
					})}
					error={form.formState.errors.email}
					label='А твоя почта?'
					type='email'
					placeholder='Электронная почта'
				/>
				<Field
					{...form.register('password', {
						required: 'Введите пароль',
						minLength: {
							value: 8,
							message: 'Пароль слишком короткий'
						}
					})}
					error={form.formState.errors.password}
					label='И пароль :)'
					type='password'
					placeholder='Пароль'
				/>
				<Field
					{...form.register('password_repeat', {
						required: 'Повторите пароль'
					})}
					error={form.formState.errors.password_repeat}
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
