import { products } from '@/data/product.data'
import { IProductDetails } from '@/types/product-details.interface'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Catalog from '@/ui/catalog/Catalog'
import Heading from '@/ui/heading/Heading'

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Layout
			title={product.name}
			description={product.description}
			image={''}
			type={''}
		>
			<Heading>The happiest hour of the year</Heading>
			<Catalog products={products} />
		</Layout>
	)
}

export default ProductDetails
