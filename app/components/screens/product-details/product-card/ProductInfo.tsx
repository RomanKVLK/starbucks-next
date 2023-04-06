import styles from './ProductCard.module.scss'
import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { IProductInfo } from '@/types/product-details.interface'

const ProductInfo: FC<IProductInfo> = ({
	product,
	currentIndexImage,
	setCurrentIndexImage
}) => {
	return (
		<div className={styles.information}>
			<h2>{product.name}</h2>
			<p>{product.description}</p>
			{product.images.map((image, index) => (
				<button
					key={image}
					onClick={() => setCurrentIndexImage(index)}
					className={cn({ [styles.active]: index === currentIndexImage })}
				>
					<Image src={image} alt={product.name} width={70} height={70} />
				</button>
			))}
		</div>
	)
}

export default ProductInfo
