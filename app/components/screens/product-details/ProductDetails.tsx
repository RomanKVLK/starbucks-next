import BreadCrumbs from './product-breadcrumbs/BreadCrumbs'
import ProductCard from './product-card/ProductCard'
import ProductNavigation from './product-navigation/ProductNavigation'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Heading from '@/ui/heading/Heading'

import { IProductDetails } from '@/types/product-details.interface'

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}>
			<Heading>Product details</Heading>
			<div>
				<BreadCrumbs product={product} />
				<ProductNavigation productId={product.id} />
			</div>
			<ProductCard product={product} />
		</Layout>
	)
}

export default ProductDetails
