interface IYear {
	id: number
	name: string
	value: string
}

export const years: IYear[] = [
	{
		id: 6,
		name: '2020-2022',
		value: '2020-2022'
	},
	{
		id: 5,
		name: '2010-2019',
		value: '2010-2019'
	},
	{
		id: 4,
		name: '2000-2009',
		value: '2000-2009'
	},
	{
		id: 3,
		name: '1990-1999',
		value: '1990-1999'
	},
	{
		id: 2,
		name: '1980-1989',
		value: '1980-1989'
	},
	{
		id: 1,
		name: 'До 1979',
		value: '1900-1980'
	}
]

interface IRating extends IYear {}

export const rating: IRating[] = [
	{
		id: 1,
		name: 'По возрастанию',
		value: 'asc'
	},
	{
		id: 2,
		name: 'По убыванию',
		value: 'desc'
	}
]
