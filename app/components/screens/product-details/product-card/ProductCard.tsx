import styles from './ProductCard.module.scss'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import ProductVariations from './ProductVariations'
import { FC, useState } from 'react'

import { IProductImage } from '@/types/product-details.interface'

const ProductCard: FC<IProductImage> = ({ product }) => {
	const [currentIndexImage, setCurrentIndexImage] = useState(0)

	return (
		<div className={styles.card}>
			<ProductInfo
				product={product}
				currentIndexImage={currentIndexImage}
				setCurrentIndexImage={setCurrentIndexImage}
			/>
			<ProductImage product={product} currentIndexImage={currentIndexImage} />
			<ProductVariations product={product} />
		</div>
	)
}

export default ProductCard
