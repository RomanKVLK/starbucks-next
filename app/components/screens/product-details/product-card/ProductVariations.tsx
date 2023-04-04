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
			<ProductRating />
			<SizeVariations
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
			/>
			<AddToCartButton product={product} selectedSize={selectedSize} />
		</div>
	)
}

export default ProductVariations
