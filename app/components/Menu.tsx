import styles from '@/app/styles/components/Menu.module.scss';
import Search from '@/app/components/Search';
import Button from '@/app/components/ui/Button/Button';
import { AiFillHome, AiFillTablet } from 'react-icons/ai';
import { IoFilmSharp } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { useTypedDispatch } from '@/app/hooks/useTypedDispatch';
import { setIsShow } from '@/app/store/modal/modal.slice';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import { useRouter } from 'next/router';
import NextLink from '@/app/components/ui/NextLink';

export default function Menu() {
	const dispatch = useTypedDispatch();
	const router = useRouter();
	const login = useTypedSelector(store => store.auth.user.login);

	function handleClick() {
		login ? router.push('/profile') : dispatch(setIsShow());
	}

	return (
		<div className={styles.menu}>
			<header>
				<NextLink href={'/'}>
					Anime<span>Zero</span>
				</NextLink>
				<Search />
			</header>
			<footer>
				<div>
					<NextLink href='/pages'>
						<AiFillHome size={20} />
						Главная
					</NextLink>
					<NextLink href={'/films'}>
						<IoFilmSharp size={20} />
						Фильмы
					</NextLink>
					<NextLink href={'/serials'}>
						<AiFillTablet size={20} />
						Сериалы
					</NextLink>
					<Button onClick={handleClick} important='secondary'>
						<FaUserAlt size={20} />
						Профиль
					</Button>
				</div>
			</footer>
		</div>
	);
}
