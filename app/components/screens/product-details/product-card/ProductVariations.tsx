import styles from './ProductCard.module.scss'
import ProductRating from './product-rating/ProductRating'
import { FC, useState } from 'react'

import AddToCartButton from '@/ui/catalog/carousel/carousel-item/AddToCartButton'
import SizeVariations from '@/ui/catalog/carousel/carousel-item/SizeVariations'

import { TypeSize } from '@/store/cart/cart.types'

import { IProductDetails } from '@/types/product-details.interface'

const ProductVariations: FC<IProductDetails> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	return (
		<div className={styles.variations}>
			<div className={styles.rating}>
				<span>Review:</span>
				<ProductRating product={product} />
			</div>
			<SizeVariations
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
			/>
			<div className={styles.buttonMedium}>
				<AddToCartButton
					product={product}
					selectedSize={selectedSize}
					variant='medium'
				/>
			</div>
		</div>
	)
}

export default ProductVariations
