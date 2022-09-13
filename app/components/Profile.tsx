import styles from '@/app/styles/components/Profile.module.scss';
import Button from '@/app/components/ui/Button/Button';
import NextLink from '@/app/components/ui/NextLink';
import { BiLogIn } from 'react-icons/bi';
import { useTypedDispatch } from '@/app/hooks/useTypedDispatch';
import { setIsShow } from '@/app/store/modal/modal.slice';
import { useRouter } from 'next/router';
import { api } from '@/app/store/api/api';
import { logout } from '@/app/store/auth/auth.actions';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';

export default function Profile() {
	const dispatch = useTypedDispatch();
	const router = useRouter();
	const token = useTypedSelector(store => store.auth.token);
	const [logoutMutation] = api.useLogoutMutation();

	const handleClick = () => {
		dispatch(setIsShow());
	};

	const handleLogout = () => {
		logoutMutation();
		dispatch(logout());
		router.push('/');
	};

	return (
		<>
			{token ? (
				<div className={styles.action}>
					{router.pathname.includes('profile') ? (
						<Button onClick={handleLogout} important='primary'>
							Выйти
						</Button>
					) : (
						<NextLink href={'/profile/recently'}>
							<Button important='primary'>Профиль</Button>
						</NextLink>
					)}
				</div>
			) : (
				<Button
					onClick={handleClick}
					important='primary'
					className={styles.profile}
				>
					<BiLogIn size={20} />
					Войти
				</Button>
			)}
		</>
	);
}
