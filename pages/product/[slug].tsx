import { products } from '@/data/product.data'
import ProductDetails from '@/screens/product-details/ProductDetails'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { IProductDetails } from '@/types/product-details.interface'
import { IProduct } from '@/types/product.interface'

const ProductDetailsPage: NextPage<IProductDetails> = ({ product }) => {
	return (
		<div>
			<ProductDetails product={product} />
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = products.map(product => {
		return {
			params: { slug: product.slug }
		}
	})

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
	params
}) => {
	const product =
		products.find(product => product.slug === params?.slug) || ({} as IProduct)
	return {
		props: {
			product
		}
	}
}

export default ProductDetailsPage
