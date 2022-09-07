import { PropsWithChildren } from 'react'
import Link from 'next/link'

interface INextLinkProps {
	href: string;
	className?: string;
}

export default function NextLink(props: PropsWithChildren<INextLinkProps>) {
	return (
		<Link href={props.href}>
			<a className={props.className}>
				{props.children}
			</a>
		</Link>
	)
}
