import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from '@/app/styles/ui/Button.module.scss';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	important?: 'primary' | 'secondary';
}

export default function Button(props: PropsWithChildren<IButton>) {
	return (
		<button
			className={cn(
				styles.button,
				{ [styles.primary]: props.important === 'primary' },
				{ [styles.secondary]: props.important === 'secondary' },
				props.className
			)}
			{...props}
		>
			{props.children}
		</button>
	);
};
