import styles from './Carousel.module.scss'
import CarouselItem from './carousel-item/CarouselItem'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<section className={styles.carousel}>
			{products.map(product => (
				<CarouselItem key={product.id} product={product} />
			))}
		</section>
	)
}

export default Carousel
