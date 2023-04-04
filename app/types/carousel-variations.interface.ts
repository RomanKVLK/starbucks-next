import { IProduct } from './product.interface'
import { Dispatch, SetStateAction } from 'react'

import { TypeSize } from '@/store/cart/cart.types'

export interface IAddToCartButton {
	product: IProduct
	selectedSize: TypeSize
}

export interface ISizeVariations {
	selectedSize: TypeSize
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>
}
