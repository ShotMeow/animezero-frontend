import { FC } from 'react'
import Link from 'next/link'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Button from '@/components/ui/Button/Button'
import styles from './Footer.module.scss'
import global from '../Layout.module.scss'
import { IoLogoVk } from 'react-icons/io'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={global.layout}>
				<div>
					<h3>Разделы</h3>
					<ul>
						<li>
							<Link href={'/catalog'}>
								<a>Каталог</a>
							</Link>
						</li>
						<li>
							<Link href={'/films'}>
								<a>Фильмы</a>
							</Link>
						</li>
						<li>
							<Link href={'/serials'}>
								<a>Сериалы</a>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3>Пользователям и партнёрам</h3>
					<ul>
						<li>
							<Link href={'/partnership'}>
								<a>Сотрудничество</a>
							</Link>
						</li>
						<li>
							<Link href={'/project'}>
								<a>О проекте</a>
							</Link>
						</li>
						<li>
							<Link href={'/privacy'}>
								<a>Политика конфиденциальности</a>
							</Link>
						</li>
						<li>
							<Link href={'/right_holder'}>
								<a>Для правообладателей</a>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3>Мы в социальных сетях</h3>
					<ul>
						<li>
							<a href='https://t.me/+-NG8FAIfeagxNmM6'>
								<FaTelegramPlane size={20} />
							</a>
						</li>
						<li>
							<a href='https://vk.com/kino_animezero'>
								<IoLogoVk size={20} />
							</a>
						</li>
						<li>
							<a href='mailto:admin@animezero.ru'>
								<AiOutlineMail size={20} />
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>Поддержка</h3>
					<a href='https://vk.com/im?media=&sel=-215749739'>
						<Button important='primary'>Написать в чате</Button>
					</a>
				</div>
			</div>
			<p>© 2022 AnimeZero. Все права защищены.</p>
		</footer>
	)
}

export default Footer
