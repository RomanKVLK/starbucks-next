import { IProduct } from './product.interface'
import { Dispatch, SetStateAction } from 'react'

import { TypeSize } from '@/store/cart/cart.types'

export interface ICarouselButton {
	product: IProduct
	selectedSize: TypeSize
}

export interface ICarouselVariations {
	selectedSize: TypeSize
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>
}
