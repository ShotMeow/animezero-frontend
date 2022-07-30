import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import Header from '@/components/Layout/Header/Header'

import styles from './Layout.module.scss'
import Footer from '@/components/Layout/Footer/Footer'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	title,
	children
}) => {
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
		</div>
	)
}

export default Layout
