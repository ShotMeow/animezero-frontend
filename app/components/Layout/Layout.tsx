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
		<div>
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
