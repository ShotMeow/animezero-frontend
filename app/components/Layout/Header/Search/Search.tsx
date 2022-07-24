import { FC } from 'react'

import styles from './Search.module.scss'
import { BiSearch } from 'react-icons/bi'

const Search: FC = () => {
	return (
		<div className={styles.search}>
			<form className={styles.action}>
				<input type='text' placeholder='Популярные новинки' />
				<button>
					<BiSearch color='white' size={24} />
				</button>
			</form>
		</div>
	)
}

export default Search
