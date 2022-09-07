import { FC } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useRouter } from 'next/router'
import styles from './Pagination.module.scss'
import cn from 'classnames'
import { IMetaLink } from '@/app/types/user.interface'

const Pagination: FC<{ links: IMetaLink[] }> = ({ links }) => {
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
		<article className={styles.pagination}>
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
		</article>
	)
}

export default Pagination
