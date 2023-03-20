import Carousel from './carousel/Carousel'
import Sorting from './sorting/Sorting'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div>
			<Sorting />
			<Carousel products={products} />
		</div>
	)
}

export default Catalog
