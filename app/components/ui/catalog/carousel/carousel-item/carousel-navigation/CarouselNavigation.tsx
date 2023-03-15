import styles from './CarouselNavigation.module.scss'
import { ICarouselNavigation } from '@/types/carousel-item.interface'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { FC } from 'react'

const CarouselNavigation: FC<ICarouselNavigation> = ({
	isActive,
	nextHandler,
	prevHandler,
	product
}) => {
	return (
		<div className={styles.navigation}>
			{isActive && (
				<button onClick={prevHandler} className={styles.arrow}>
					<ChevronLeftIcon fontSize={13} />
				</button>
			)}
			<Image
				src={product.images[0]}
				alt={product.name}
				width={400}
				height={400}
				className={styles.image}
				draggable={false}
			/>
			{isActive && (
				<button onClick={nextHandler} className={styles.arrow}>
					<ChevronRightIcon fontSize={13} />
				</button>
			)}
		</div>
	)
}

export default CarouselNavigation
