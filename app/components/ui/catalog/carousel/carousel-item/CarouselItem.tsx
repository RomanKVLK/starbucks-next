import styles from '../Carousel.module.scss'
import CarouselButton from './CarouselButton'
import CarouselVariations from './CarouselVariations'
import CarouselNavigation from './carousel-navigation/CarouselNavigation'
import { useCarousel } from './useCarousel'
import { ICarouselItem } from '@/types/carousel-item.interface'
import cn from 'clsx'
import { FC, useState } from 'react'

import { useActions } from '@/components/hooks/useActions'

import { TypeSize } from '@/store/cart/cart.types'

const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	const { selectedItemIndex } = useCarousel()
	const { selectSlide } = useActions()

	const isActive = index === selectedItemIndex

	return (
		<div
			className={cn(styles.item, {
				[styles.active]: index === selectedItemIndex
			})}
			// onClick={() => selectSlide(index)}
			aria-label='Select Item'
			role='button'
		>
			<div>
				<CarouselNavigation product={product} isActive={isActive} />
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
