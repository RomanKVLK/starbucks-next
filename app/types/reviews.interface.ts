import { IProduct } from './product.interface'

export interface IReviews {
	id: number
	// user
	product: IProduct
	content: string
	rating: number
}
