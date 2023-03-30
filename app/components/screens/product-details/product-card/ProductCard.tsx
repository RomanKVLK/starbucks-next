import styles from './ProductCard.module.scss'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import ProductVariations from './ProductVariations'
import { FC } from 'react'

import { IProductDetails } from '@/types/product-details.interface'

const ProductCard: FC<IProductDetails> = ({ product }) => {
	return (
		<div className={styles.card}>
			<ProductInfo product={product} />
			<ProductImage product={product} />
			<ProductVariations product={product} />
		</div>
	)
}

export default ProductCard
