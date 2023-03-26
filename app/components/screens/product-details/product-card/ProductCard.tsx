import styles from './ProductCard.module.scss'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import ProductVariations from './ProductVariations'
import { FC } from 'react'

const ProductCard: FC = () => {
	return (
		<div className={styles.card}>
			<ProductInfo product={product} />
			<ProductImage />
			<ProductVariations />
		</div>
	)
}

export default ProductCard
