import Carousel from './carousel/Carousel'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div>
			<Carousel products={products} />
		</div>
	)
}

export default Catalog
