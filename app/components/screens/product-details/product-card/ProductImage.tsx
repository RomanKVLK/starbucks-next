import styles from './ProductCard.module.scss'
import Image from 'next/image'
import { FC } from 'react'

import { IProductDetails } from '@/types/product-details.interface'

import { formatToCurrency } from '@/utils/format-to-currency'

const ProductImage: FC<IProductDetails> = ({ product }) => {
	return (
		<div className={styles.image}>
			<Image
				src={product.images[0]}
				alt={product.name}
				width={300}
				height={300}
			/>
			<div>{formatToCurrency(product.price)}</div>
		</div>
	)
}

export default ProductImage
