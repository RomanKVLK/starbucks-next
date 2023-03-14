import { IProduct } from '@/types/product.interface'

import { TypeSize } from '@/store/types'

export interface ICartItem {
	id: number
	product: IProduct
	quantity: number
	size: TypeSize
}
