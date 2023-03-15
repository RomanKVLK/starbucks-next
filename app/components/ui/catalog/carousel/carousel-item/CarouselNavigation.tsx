import styles from '../Carousel.module.scss'
import { ICarouselNavigation } from '@/types/carousel-item.interface'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
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
				<Button onClick={prevHandler} className={styles.arrow}>
					<ChevronLeftIcon fontSize={13} />
				</Button>
			)}
			<Image
				src={product.images[0]}
				alt={product.name}
				width={400}
				height={400}
				className={styles.image}
			/>
			{isActive && (
				<Button onClick={nextHandler} className={styles.arrow}>
					<ChevronRightIcon fontSize={13} />
				</Button>
			)}
		</div>
	)
}

export default CarouselNavigation
