import { FC } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { ILink } from '@/components/ui/Pagination/Pagination.interface'
import { useRouter } from 'next/router'
import styles from './Pagination.module.scss'
import cn from 'classnames'

const Pagination: FC<{ links: ILink[] }> = ({ links }) => {
	const router = useRouter()
	const currentLinks = links.slice(1, links.length - 1)

	const handlePagination = (page: number) => () => {
		const path = router.pathname
		const query = router.query
		query.page = String(page)
		router.push({
			pathname: path,
			query: query
		})
	}
	return (
		<div className={styles.pagination}>
			<ul>
				<li>
					<button
						disabled={Number(router.query.page) === 1}
						onClick={handlePagination(Number(router.query.page) - 1)}
					>
						<IoIosArrowBack size={20} />
					</button>
				</li>
				{currentLinks.map(link => (
					<li className={cn({ [styles.active]: link.active })} key={link.label}>
						{link.url ? (
							<button onClick={handlePagination(Number(link.label))}>
								{link.label}
							</button>
						) : (
							<span>{link.label}</span>
						)}
					</li>
				))}
				<li>
					<button
						disabled={
							Number(router.query.page) ===
							Number(currentLinks[currentLinks.length - 1])
						}
						onClick={handlePagination(Number(router.query.page) + 1)}
					>
						<IoIosArrowForward size={20} />
					</button>
				</li>
			</ul>
		</div>
	)
}

export default Pagination
