import styles from '../Carousel.module.scss'
import { ICarouselVariations } from '@/types/carousel-variations.interface'
import cn from 'clsx'
import { FC } from 'react'

import { TypeSize } from '@/store/cart/cart.types'

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI']

const CarouselVariations: FC<ICarouselVariations> = ({
	selectedSize,
	setSelectedSize
}) => {
	return (
		<div className={styles.variations}>
			{SIZES.map(size => (
				<button
					key={size}
					className={cn({ [styles.active]: selectedSize === size })}
					onClick={() => setSelectedSize(size)}
				>
					{size}
				</button>
			))}
		</div>
	)
}

export default CarouselVariations
