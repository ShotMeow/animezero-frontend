import { FC } from 'react'

import styles from './Search.module.scss'
import { BiSearch } from 'react-icons/bi'
import { useSearch } from '@/hooks/useSearch'
import SearchTermItem from '@/components/ui/SearchTermItem/SearchTermItem'

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch()
	return (
		<div className={styles.search}>
			<label className={styles.action}>
				<input
					type='text'
					placeholder='Популярные новинки'
					value={searchTerm}
					onChange={handleSearch}
				/>
				<button>
					<BiSearch color='white' size={24} />
				</button>
			</label>
			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						<div>
							<h5>Фильмы и сериалы</h5>
							{data.map(film => (
								<SearchTermItem key={film.id} film={film} />
							))}
						</div>
					) : (
						<h5 className={styles.notFound}>Фильмы не найдены!</h5>
					)}
				</div>
			)}
		</div>
	)
}

export default Search
