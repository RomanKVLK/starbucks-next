import { useCarousel } from '../useCarousel'
import styles from './CarouselNavigation.module.scss'
import { products } from '@/data/product.data'
import { ICarouselNavigation } from '@/types/carousel-item.interface'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { FC } from 'react'

import { useActions } from '@/components/hooks/useActions'

const CarouselNavigation: FC<ICarouselNavigation> = ({
	product,
	isActive,
	onSelectSlide
}) => {
	const { prevSlide, nextSlide } = useActions()
	return (
		<div className={styles.navigation}>
			{isActive && (
				<div className={styles.arrows}>
					<button onClick={() => prevSlide()} className={styles.arrow}>
						<ChevronLeftIcon fontSize={40} />
					</button>
					<button
						onClick={() => nextSlide({ carouselLenght: products.length })}
						className={styles.arrow}
					>
						<ChevronRightIcon fontSize={40} />
					</button>
				</div>
			)}
			<Image
				src={product.images[0]}
				alt={product.name}
				width={400}
				height={400}
				className={styles.image}
				draggable={false}
				onClick={onSelectSlide}
			/>
		</div>
	)
}

export default CarouselNavigation
