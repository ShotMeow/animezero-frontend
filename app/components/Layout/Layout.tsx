import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import Header from '@/components/Layout/Header/Header'

import styles from './Layout.module.scss'
import Footer from '@/components/Layout/Footer/Footer'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import Modal from '@/components/ui/Modal/Modal'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	title,
	children
}) => {
	const isModal = useTypedSelector(state => state.modal.isShow)
	return (
		<div className={styles.wrapper}>
			<Head>
				<meta property='og:locale' content='ru_RU' />
				<meta property='og:site_name' content='AnimeZero' />
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='og:description'
					content='AnimeZero - онлайн-кинотеатр аниме. Здесь вы можете бесплатно посмотреть новинки в аниме индустрии.'
				/>
				<meta
					property='description'
					content='AnimeZero - онлайн-кинотеатр аниме. Здесь вы можете бесплатно посмотреть новинки в аниме индустрии.'
				/>
				<meta
					property='keywords'
					content='anime animezero аниме кино кинотеатр бесплатно фильмы сериалы'
				/>
			</Head>
			<div className={styles.layout}>
				<Head>
					<title>{title}</title>
				</Head>
				<Header />
				<main>{children}</main>
			</div>
			<Footer />
			{isModal && <Modal />}
		</div>
	)
}

export default Layout
