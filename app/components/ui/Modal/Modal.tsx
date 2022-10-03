import styles from './Modal.module.scss';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import { useTypedDispatch } from '@/app/hooks/useTypedDispatch';
import { IoIosClose } from 'react-icons/io';
import { setIsShow } from '@/app/store/modal/modal.slice';
import Login from '@/app/components/ui/Modal/Login/Login';
import Register from '@/app/components/ui/Modal/Register/Register';
import Verify from '@/app/components/ui/Modal/Verify/Verify';
import UpdateVerify from '@/app/components/ui/Modal/UpdateVerify/UpdateVerify';

export default function Modal() {
	const type = useTypedSelector(store => store.modal.type);
	const dispatch = useTypedDispatch();

	return (
		<div className={styles.modal} onClick={() => dispatch(setIsShow())}>
			<div onClick={e => e.stopPropagation()}>
				<button onClick={() => dispatch(setIsShow())}>
					<IoIosClose size={30} />
				</button>
				{type === 'login' && <Login />}
				{type === 'register' && <Register />}
				{type === 'verify' && <Verify />}
				{type === 'update-verify' && <UpdateVerify />}
			</div>
		</div>
	);
};
