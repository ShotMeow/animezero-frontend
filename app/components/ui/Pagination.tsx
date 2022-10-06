import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/router';
import styles from '@/app/styles/ui/Pagination.module.scss';
import cn from 'classnames';
import { IMetaLink } from '@/app/interfaces/IMetaLink';
import { Event } from '@/pages/_app';

interface IPaginationProps {
	links: IMetaLink[];
}

export default function Pagination(props: IPaginationProps) {
	const router = useRouter();
	const currentLinks = props.links.slice(1, props.links.length - 1);

	const handlePagination = (page: number) => () => {
		Event.emit('pagination-page', page);
	};

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
	);
}
