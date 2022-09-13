import Field from '@/app/components/ui/Field';
import Button from '@/app/components/ui/Button';
import { useTypedDispatch } from '@/app/hooks/useTypedDispatch';
import { useForm } from 'react-hook-form';
import { changeType, setIsShow } from '@/app/store/modal/modal.slice';
import { login } from '@/app/store/auth/auth.actions';
import { ILoginFields } from '@/app/interfaces/ILoginFields';

export default function Login() {
	const dispatch = useTypedDispatch();

	const form = useForm<ILoginFields>({
		mode: 'onChange'
	});

	function onLoginSubmit(data: ILoginFields) {
		dispatch(login(data)).then(data => {
			// @ts-ignore
			if (data.payload.message === 'Please verify your email.') {
				dispatch(changeType('verify'));
			} else if (
				// @ts-ignore
				!data.payload.message
			) {
				dispatch(setIsShow());
			} else {
				form.setError('password', { message: 'Неверный логин или пароль' });
			}
		});
	}

	return (
		<form onSubmit={form.handleSubmit(onLoginSubmit)}>
			<div>
				<h3>Вход</h3>
				<p>С возвращением!</p>
			</div>
			<div>
				<Field
					{...form.register('login', {
						required: 'Введите логин'
					})}
					error={form.formState.errors.login}
					label='Напомнишь свой логин?'
					type='text'
					placeholder='Логин'
				/>
				<Field
					{...form.register('password', {
						required: 'Введите пароль'
					})}
					error={form.formState.errors.password}
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
	);
};
