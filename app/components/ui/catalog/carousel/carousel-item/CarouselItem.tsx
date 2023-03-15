import styles from '../Carousel.module.scss'
import CarouselButton from './CarouselButton'
import CarouselVariations from './CarouselVariations'
import CarouselNavigation from './carousel-navigation/CarouselNavigation'
import { ICarouselItem } from '@/types/carousel-item.interface'
import cn from 'clsx'
import { FC, useState } from 'react'

import { TypeSize } from '@/store/types'

const CarouselItem: FC<ICarouselItem> = ({
	product,
	isActive,
	selectItem,
	nextHandler,
	prevHandler
}) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	return (
		<div
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
			onClick={selectItem}
			aria-label='Select Item'
			role='button'
		>
			<div>
				<CarouselNavigation
					isActive={isActive}
					nextHandler={nextHandler}
					prevHandler={prevHandler}
					product={product}
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
