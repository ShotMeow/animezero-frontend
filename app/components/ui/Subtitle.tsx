import { PropsWithChildren } from 'react';
import styles from '@/app/styles/ui/Subtitle.module.scss';

export interface ISubtitleProps {
	title?: string;
}

export default function Subtitle(props: PropsWithChildren<ISubtitleProps>) {
	return <div className={styles.subtitle}>
		<div className={styles.icon}>
			{props.children}
		</div>
		<h2>{props.title}</h2>
	</div>;
};
