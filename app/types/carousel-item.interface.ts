import { IProduct } from './product.interface'

export interface ICarouselItem {
	isActive: boolean
	selectItem: () => void
	product: IProduct
	nextHandler: () => void
	prevHandler: () => void
}

export interface ICarouselNavigation
	extends Omit<ICarouselItem, 'selectItem'> {}
