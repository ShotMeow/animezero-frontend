import { FC } from 'react'
import styles from './Menu.module.scss'
import Link from 'next/link'
import Search from '@/components/Layout/Header/Search/Search'
import Button from '@/components/ui/Button/Button'
import { AiFillHome, AiFillTablet } from 'react-icons/ai'
import { IoFilmSharp } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { setIsShow } from '@/store/modal/modal.slice'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useRouter } from 'next/router'

const Menu: FC = () => {
	const dispatch = useTypedDispatch()

	const router = useRouter()

	const login = useTypedSelector(store => store.auth.user.login)

	const handleClick = () => {
		login ? router.push('/profile') : dispatch(setIsShow())
	}
	return (
		<div className={styles.menu}>
			<header>
				<Link href={'/'}>
					<a>
						Anime<span>Zero</span>
					</a>
				</Link>
				<Search />
			</header>
			<footer>
				<div>
					<Link href='/'>
						<a>
							<AiFillHome size={20} />
							Главная
						</a>
					</Link>
					<Link href={'/movies'}>
						<a>
							<IoFilmSharp size={20} />
							Фильмы
						</a>
					</Link>
					<Link href={'/serials'}>
						<a>
							<AiFillTablet size={20} />
							Сериалы
						</a>
					</Link>
					<Button onClick={handleClick} important='secondary'>
						<FaUserAlt size={20} />
						Профиль
					</Button>
				</div>
			</footer>
		</div>
	)
}

export default Menu
