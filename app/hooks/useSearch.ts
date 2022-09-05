import { ChangeEvent, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { filmsApi } from '@/store/api/films.api'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	const { data, isSuccess } = filmsApi.useGetFilmsBySearchTermQuery(
		debounceSearch,
		{
			skip: !debounceSearch,
			selectFromResult: ({ data, ...rest }) => ({
				data: data?.data.slice(0, 6),
				...rest
			})
		}
	)

	return {
		handleSearch,
		data,
		isSuccess,
		searchTerm
	}
}
