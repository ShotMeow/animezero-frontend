import { FC } from 'react'
import Link from 'next/link'
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Button from '@/components/ui/Button/Button'
import styles from './Footer.module.scss'
import global from '../Layout.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={global.layout}>
				<div>
					<h3>Разделы</h3>
					<ul>
						<li>
							<Link href='/'>
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
							<a href='#'>
								<FaTelegramPlane size={20} />
							</a>
						</li>
						<li>
							<a href='#'>
								<FaInstagram size={20} />
							</a>
						</li>
						<li>
							<a href='#'>
								<AiOutlineMail size={20} />
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>Поддержка</h3>
					<Button important='primary'>Написать в чате</Button>
				</div>
			</div>
			<p>© 2022 AnimeZero. Все права защищены.</p>
		</footer>
	)
}

export default Footer
