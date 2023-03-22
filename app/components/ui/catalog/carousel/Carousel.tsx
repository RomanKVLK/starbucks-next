import styles from './Carousel.module.scss'
import CarouselItem from './carousel-item/CarouselItem'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<section className={styles.carousel}>
			{products.map((product, index) => (
				<CarouselItem key={product.name} product={product} index={index} />
			))}
		</section>
	)
}

export default Carousel
