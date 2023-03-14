import styles from '../Carousel.module.scss'
import CarouselButton from './CarouselButton'
import CarouselVariations from './CarouselVariations'
import { IProduct } from '@/types/product.interface'
import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'

import { TypeSize } from '@/store/types'

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')
	const isActive = product.id === 2
	return (
		<div
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
		>
			<div>
				<Image
					src={product.images[0]}
					alt={product.name}
					width={400}
					height={400}
					className={styles.image}
				/>
				<div className={styles.heading}>{product.name}</div>
				{isActive ? (
					<>
						<CarouselVariations
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<div className={styles.button}>
							<CarouselButton selectedSize={selectedSize} product={product} />
						</div>
					</>
				) : (
					<div className={styles.description}>{product.description}</div>
				)}
			</div>
		</div>
	)
}

export default CarouselItem
