import { IReviews } from './reviews.interface'

export interface IProduct {
	id: number
	name: string
	description: string
	price: number
	reviews: IReviews[]
	images: string[]
	slug: string
}
