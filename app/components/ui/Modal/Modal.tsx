import { FC } from 'react'
import styles from './Modal.module.scss'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { IoIosClose } from 'react-icons/io'
import { setIsShow } from '../../../store/modal/modal.slice'
import Login from '@/components/ui/Modal/Login/Login'
import Register from '@/components/ui/Modal/Register/Register'
import Verify from '@/components/ui/Modal/Verify/Verify'

const Modal: FC = () => {
	const type = useTypedSelector(store => store.modal.type)
	const dispatch = useTypedDispatch()

	return (
		<div className={styles.modal} onClick={() => dispatch(setIsShow())}>
			<div onClick={e => e.stopPropagation()}>
				<button onClick={() => dispatch(setIsShow())}>
					<IoIosClose size={30} />
				</button>
				{type === 'login' && <Login />}
				{type === 'register' && <Register />}
				{type === 'verify' && <Verify />}
			</div>
		</div>
	)
}

export default Modal
