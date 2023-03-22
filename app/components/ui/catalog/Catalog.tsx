import styles from './Catalog.module.scss'
import Carousel from './carousel/Carousel'
import Sorting from './sorting/Sorting'
import { EnumSorting } from './sorting/sorting.interface'
import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST)

	return (
		<div>
			<div className={styles.sorting}>
				<Sorting sortType={sortType} setSortType={setSortType} />
			</div>
			<Carousel products={products} />
		</div>
	)
}

export default Catalog
