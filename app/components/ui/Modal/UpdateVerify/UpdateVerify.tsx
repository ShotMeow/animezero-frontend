import { ChangeEvent, useEffect, useState } from 'react';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import Button from '@/app/components/ui/Button';
import cn from 'classnames';
import styles from '../Modal.module.scss';
import { useTypedDispatch } from '@/app/hooks/useTypedDispatch';
import { setIsShow } from '@/app/store/modal/modal.slice';
import { toastr } from 'react-redux-toastr';
import { IInfo } from '@/app/components/ui/Modal/Verify/Verify.interface';
import { api } from '@/app/store/api/api';
import { profileApi } from '@/app/store/api/profile.api';
import { removeEmptyHelper } from '@/app/helpers/removeEmptyHelper';
import { clearData, setCode } from '@/app/store/update/update.slice';

export default function Verify() {
	const [info, setInfo] = useState<IInfo>({} as IInfo);
	const [value, setValue] = useState<string>('');
	const [update] = api.useUpdateMutation();
	let res = useTypedSelector(store => store.update);
	const { refetch } = profileApi.useGetProfileDataQuery('');
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(setCode(value));
	}, [value]);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		update(removeEmptyHelper(res)).then(data => {
			// @ts-ignore
			if (!data.error) {
				dispatch(setIsShow());
				toastr.success('Успех', 'Данные успешно изменены');
				refetch();
				dispatch(clearData());
			} else {
				setInfo({
					type: 'error',
					body: 'Код введен неверно'
				});
			}
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h3>Подтвердите изменения</h3>
				<p>Введите 6-значный код который мы выслали вам на почту</p>
			</div>
			<div>
				<div>
					<div className={styles.fields}>
						<div>
							<div className={cn({ [styles.active]: value[0] })}>
								{value[0]}
							</div>
							<div className={cn({ [styles.active]: value[1] })}>
								{value[1]}
							</div>
							<div className={cn({ [styles.active]: value[2] })}>
								{value[2]}
							</div>
						</div>
						<div>
							<div className={cn({ [styles.active]: value[3] })}>
								{value[3]}
							</div>
							<div className={cn({ [styles.active]: value[4] })}>
								{value[4]}
							</div>
							<div className={cn({ [styles.active]: value[5] })}>
								{value[5]}
							</div>
						</div>
					</div>
					<input
						type='text'
						value={value}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setValue(e.target.value)
						}
						maxLength={6}
					/>
				</div>
				<p
					className={cn(
						{ [styles.success]: info.type === 'success' },
						{ [styles.error]: info.type === 'error' }
					)}
				>
					{info.body}
				</p>
				<Button important='primary'>Подтвердить</Button>
			</div>
		</form>
	);
};
