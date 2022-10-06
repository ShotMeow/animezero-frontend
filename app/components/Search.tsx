import styles from '@/app/styles/components/Search.module.scss';
import SearchTermItem from '@/app/components/ui/SearchTermItem';
import { useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useSearch } from '@/app/hooks/useSearch';
import { useOutside } from '@/app/hooks/useOutside';

export default function Search() {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch();
	const { ref, setIsShow, isShow } = useOutside(true);

	useEffect(() => {
		setIsShow(isSuccess);
	}, [isSuccess]);

	return (
		<div className={styles.search}>
			<label className={styles.action}>
				<input
					type='text'
					placeholder='Популярные новинки'
					value={searchTerm}
					onChange={handleSearch}
				/>
				<button aria-label='Search'>
					<BiSearch color='white' size={24} />
				</button>
			</label>
			{isSuccess && isShow && (
				<div ref={ref} className={styles.result}>
					{data?.length ? (
						<div>
							<h5>Фильмы и сериалы</h5>
							{data.map(film => (
								<SearchTermItem
									setIsShow={setIsShow}
									key={film.id}
									film={film}
								/>
							))}
						</div>
					) : (
						<h5 className={styles.notFound}>Фильмы не найдены!</h5>
					)}
				</div>
			)}
		</div>
	);
}
