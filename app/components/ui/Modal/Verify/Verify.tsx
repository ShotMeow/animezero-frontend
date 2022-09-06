import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import Button from '@/components/ui/Button/Button'
import { api } from '@/store/api/api'
import cn from 'classnames'
import styles from '../Modal.module.scss'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { setIsShow } from '@/store/modal/modal.slice'
import { toastr } from 'react-redux-toastr'
import { IInfo } from '@/components/ui/Modal/Verify/Verify.interface'
import { setToken } from '@/store/auth/auth.slice'

const Verify: FC = () => {
	const [info, setInfo] = useState<IInfo>({} as IInfo)
	const [value, setValue] = useState<string>('')
	const email = useTypedSelector(store => store.auth.user.email)
	const tempToken = useTypedSelector(store => store.auth.tempToken)
	const [resend] = api.useResendMutation()
	const [verify] = api.useVerifyMutation()
	const dispatch = useTypedDispatch()

	const handleClick = () => {
		resend().then(data => {
			// @ts-ignore
			if (!data.error) {
				setInfo({ type: 'success', body: 'Письмо успешно отправлено' })
			} else {
				setInfo({
					type: 'error',
					body: 'Слишком много попыток. Попробуйте позже'
				})
			}
		})
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		verify(value).then(data => {
			if (!value.length) {
				setInfo({ type: 'error', body: 'Введите код из письма' })
				// @ts-ignore
			} else if (!data.error) {
				toastr.success('Авторизация', 'Ты успешно авторизовался')
				dispatch(setToken(tempToken))
				dispatch(setIsShow())
			} else {
				setInfo({ type: 'error', body: 'Код введен неверно' })
			}
		})
	}

	return (
		<form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
			<div>
				<h3>Подтверждение входа</h3>
				<p>Введите 6-значный код который мы выслали вам на {email}</p>
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
				<Button important='primary'>Войти</Button>
			</div>
			<div>
				<p>Не пришёл код?</p>
				<button type='button' onClick={() => handleClick()}>
					Выслать код повторно
				</button>
			</div>
		</form>
	)
}

export default Verify
