import { Dispatch, SetStateAction } from 'react'

export enum EnumSorting {
	LOW_TO_HIGH_PRICE = 'LOW_TO_HIGH_PRICE',
	HIGH_TO_LOW_PRICE = 'HIGH_TO_LOW_PRICE',
	NEWEST = 'NEWEST',
	OLDEST = 'OLDEST'
}

export interface ISortingItem {
	label: 'Price: Low to high' | 'Price: High to low' | 'Newest' | 'Oldest'
	value: EnumSorting
}

export interface ISorting {
	sortType: EnumSorting
	setSortType: Dispatch<SetStateAction<EnumSorting>>
}
