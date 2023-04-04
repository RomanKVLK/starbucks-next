import styles from '../Carousel.module.scss'
import cn from 'clsx'
import { FC } from 'react'

import { TypeSize } from '@/store/cart/cart.types'

import { ISizeVariations } from '@/types/carousel-variations.interface'

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI']

const SizeVariations: FC<ISizeVariations> = ({
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

export default SizeVariations
