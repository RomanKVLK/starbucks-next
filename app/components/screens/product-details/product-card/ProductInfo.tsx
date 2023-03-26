import { IProductDetails } from '@/types/product-details.interface'
import Image from 'next/image'
import { FC } from 'react'

const ProductInfo: FC<IProductDetails> = ({ product }) => {
	return (
		<div className={styles.description}>
			<h1>{product.name}</h1>
			<p>{product.description}</p>
			{product.images.map(image => (
				<button key={image}>
					<Image src={image} alt='' width={100} height={100} />
				</button>
			))}
		</div>
	)
}

export default ProductInfo
