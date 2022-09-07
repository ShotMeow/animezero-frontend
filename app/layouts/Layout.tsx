import Head from 'next/head'
import Header from '@/app/components/Header'
import styles from '@/app/styles/Layout.module.scss'
import Modal from '@/app/components/ui/Modal/Modal'
import Footer from '@/app/components/Footer'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'
import { createSlot } from 'react-slotify'
import { PropsWithChildren } from 'react'

interface ILayoutProps {
	title: string;
}

export const HeadSlot = createSlot()

export default function Layout(props: PropsWithChildren<ILayoutProps>) {
	const isModal = useTypedSelector(state => state.modal.isShow)
	return (
		<div className={styles.wrapper}>
			<Head>
				<HeadSlot.Renderer childs={props.children} />
				<title>{props.title}</title>
			</Head>
			<div className={styles.layout}>
				<Header />
				<main>{props.children}</main>
			</div>
			<Footer />
			{isModal && <Modal />}
		</div>
	)
}
