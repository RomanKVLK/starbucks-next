import { products } from '@/data/product.data'
import ProductDetails from '@/screens/product-details/ProductDetails'
import { IProductDetails } from '@/types/product-details.interface'
import { GetStaticProps, NextPage } from 'next'

const ProductDetailsPage: NextPage<IProductDetails> = ({ product }) => {
	return (
		<div>
			<ProductDetails product={product} />
		</div>
	)
}

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
	params
}) => {
	const product = products.find(product => product.slug === params?.slug)
	return {
		props: {
			product
		}
	}
}

export default ProductDetailsPage
