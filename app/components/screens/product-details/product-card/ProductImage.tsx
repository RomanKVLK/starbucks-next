import styles from './ProductCard.module.scss'
import Image from 'next/image'
import { FC } from 'react'

import { IProductImage } from '@/types/product-details.interface'

import { formatToCurrency } from '@/utils/format-to-currency'

const ProductImage: FC<IProductImage> = ({ product, currentIndexImage }) => {
	return (
		<div className={styles.image}>
			<div className={styles.wrapper}>
				<Image
					src={product.images[currentIndexImage]}
					alt={product.name}
					width={260}
					height={260}
				/>
			</div>
			<div className={styles.price}>{formatToCurrency(product.price)}</div>
		</div>
	)
}

export default ProductImage
