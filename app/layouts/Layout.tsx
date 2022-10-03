import Header from '@/app/components/Header';
import styles from '@/app/styles/Layout.module.scss';
import Modal from '@/app/components/ui/Modal/Modal';
import Footer from '@/app/components/Footer';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import { PropsWithChildren } from 'react';
import Head from 'next/head';

interface ILayoutProps {
	title: string;
	metaSlot?: () => JSX.Element;
}

export default function Layout(props: PropsWithChildren<ILayoutProps>) {
	const isModal = useTypedSelector(state => state.modal.isShow);
	return (
		<>
			<Head>
				<title>{props.title}</title>
				<>
					{props.metaSlot && props.metaSlot()}
				</>
			</Head>
			<div className={styles.wrapper}>
				<div className={styles.layout}>
					<Header />
					<main>{props.children}</main>
				</div>
				<Footer />
				{isModal && <Modal />}
			</div>
		</>
	);
}
