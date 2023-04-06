import { IProduct } from './product.interface'
import { Dispatch, SetStateAction } from 'react'

export interface IProductDetails {
	product: IProduct
}

export interface IProductImage extends IProductDetails {
	currentIndexImage: number
}

export interface IProductInfo extends IProductImage {
	setCurrentIndexImage: Dispatch<SetStateAction<number>>
}
