import styles from '../Carousel.module.scss'
import CarouselButton from './CarouselButton'
import CarouselVariations from './CarouselVariations'
import CarouselNavigation from './carousel-navigation/CarouselNavigation'
import { useCarousel } from './useCarousel'
import { ICarouselItem } from '@/types/carousel-item.interface'
import cn from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useState } from 'react'

import { useActions } from '@/components/hooks/useActions'

import { TypeSize } from '@/store/cart/cart.types'

const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	const { selectedItemIndex } = useCarousel()
	const { selectSlide } = useActions()

	const isActive = index === selectedItemIndex

	return (
		<motion.div
			className={cn(styles.item, {
				[styles.active]: index === selectedItemIndex
			})}
			aria-label='Select Item'
			role='button'
			initial={{ scale: 1 }}
			animate={isActive ? { scale: 1.12 } : {}}
			transition={{ duration: 1, type: 'spring' }}
		>
			<div>
				<CarouselNavigation
					onSelectSlide={() => selectSlide(index)}
					product={product}
					isActive={isActive}
				/>
				<button onClick={() => selectSlide(index)} className={styles.heading}>
					{product.name}
				</button>
				{isActive ? (
					<>
						<CarouselVariations
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<div className={styles.button}>
							<CarouselButton selectedSize={selectedSize} product={product} />
						</div>
						<Link href={`/product/${product.slug}`} className={styles.link}>
							More information
						</Link>
					</>
				) : (
					<div className={styles.description}>{product.description}</div>
				)}
			</div>
		</motion.div>
	)
}

export default CarouselItem
