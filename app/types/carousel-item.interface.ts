import { IProduct } from './product.interface'

export interface ICarouselItem {
	index: number
	product: IProduct
}

export interface ICarouselNavigation extends Omit<ICarouselItem, 'index'> {
	isActive: boolean
}
