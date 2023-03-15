import styles from './Carousel.module.scss'
import CarouselItem from './carousel-item/CarouselItem'
import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0)

	const nextHandler = () => {
		if (selectedItemIndex !== products.length - 1)
			setSelectedItemIndex(selectedItemIndex + 1)
	}

	const prevHandler = () => {
		if (selectedItemIndex > 0) setSelectedItemIndex(selectedItemIndex - 1)
	}

	return (
		<section className={styles.carousel}>
			{products.map((product, index) => (
				<CarouselItem
					key={product.name}
					product={product}
					isActive={index === selectedItemIndex}
					selectItem={() => setSelectedItemIndex(index)}
					nextHandler={nextHandler}
					prevHandler={prevHandler}
				/>
			))}
		</section>
	)
}

export default Carousel
