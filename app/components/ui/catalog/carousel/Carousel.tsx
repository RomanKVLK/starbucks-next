import styles from './Carousel.module.scss'
import CarouselItem from './carousel-item/CarouselItem'
import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0)

	return (
		<section className={styles.carousel}>
			{products.map((product, index) => (
				<CarouselItem key={product.name} product={product} index={index} />
			))}
		</section>
	)
}

export default Carousel
