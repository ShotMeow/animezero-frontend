import { PropsWithChildren } from 'react'

interface INextLinkProps {
	href: string;
	className?: string;
}

export default function NextLink(props: PropsWithChildren<INextLinkProps>) {
	return (
		<NextLink href={props.href} className={props.className}>
			{props.children}
		</NextLink>
	)
}
