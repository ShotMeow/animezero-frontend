import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Button from '@/app/components/ui/Button/Button'
import styles from '@/app/styles/components/Footer.module.scss'
import global from '@/app/styles/Layout.module.scss'
import { IoLogoVk } from 'react-icons/io'
import NextLink from '@/app/components/ui/NextLink'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={global.layout}>
				<div>
					<h3>Разделы</h3>
					<ul>
						<li>
							<NextLink href={'/'}>
								Каталог
							</NextLink>
						</li>
						<li>
							<NextLink href={'/films'}>
								Фильмы
							</NextLink>
						</li>
						<li>
							<NextLink href={'/serials'}>
								Сериалы
							</NextLink>
						</li>
					</ul>
				</div>
				<div>
					<h3>Пользователям и партнёрам</h3>
					<ul>
						<li>
							<NextLink href={'/partnership'}>
								Сотрудничество
							</NextLink>
						</li>
						<li>
							<NextLink href={'/project'}>
								О проекте
							</NextLink>
						</li>
						<li>
							<NextLink href={'/privacy'}>
								Политика конфиденциальности
							</NextLink>
						</li>
						<li>
							<NextLink href={'/right_holder'}>
								Для правообладателей
							</NextLink>
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
