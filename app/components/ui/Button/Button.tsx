import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import { IButton } from '@/components/ui/Button/Button.interface'
import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	important,
	...rest
}) => {
	return (
		<button
			className={cn(
				styles.button,
				{ [styles.primary]: important === 'primary' },
				{ [styles.secondary]: important === 'secondary' },
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
