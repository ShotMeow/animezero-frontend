import { FC } from 'react';
import styles from '@/app/styles/Profile.module.scss';
import Aside from '@/app/components/profile/Aside';
import Layout from '@/app/layouts/Layout';
import Field from '@/app/components/ui/Field/Field';
import Button from '@/app/components/ui/Button/Button';
import { useTypedDispatch } from '@/app/hooks/useTypedDispatch';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegisterFields } from '@/app/components/ui/Modal/Modal.interface';
import { api } from '@/app/store/api/api';
import { changeType, setIsShow } from '@/app/store/modal/modal.slice';
import { setData } from '@/app/store/update/update.slice';
import { IUserUpdate } from '@/app/interfaces/IUserUpdate';

const Settings: FC = () => {
	const [requestCode] = api.useRequestCodeMutation();
	const dispatch = useTypedDispatch();

	const {
		register,
		setError,
		formState: { errors },
		handleSubmit
	} = useForm<IRegisterFields>({
		mode: 'onChange'
	});

	const onChangeSubmit: SubmitHandler<IUserUpdate> = data => {
		if (data.login || data.email || data.password) {
			if (data.password) {
				if (data.password !== data.password_repeat) {
					return setError('password_repeat', { message: 'Пароли не совпадают' });
				}
			}
			requestCode().then(res => {
				// @ts-ignore
				if (!res.error) {
					dispatch(setData(data));
					dispatch(setIsShow());
					dispatch(changeType('update-verify'));
				}
			});
		}
	};

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
	);
};

export default Settings;
