import styles from './ProductCard.module.scss'
import Image from 'next/image'
import { FC } from 'react'

import { IProductDetails } from '@/types/product-details.interface'

const ProductInfo: FC<IProductDetails> = ({ product }) => {
	return (
		<div className={styles.information}>
			<h2>{product.name}</h2>
			<p>{product.description}</p>
			{product.images.map(image => (
				<button key={image}>
					<Image src={image} alt='' width={70} height={70} />
				</button>
			))}
		</div>
	)
}

export default ProductInfo
