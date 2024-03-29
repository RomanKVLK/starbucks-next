import styles from './ProductNavigation.module.scss'
import { useProductNavigationts } from './useProductNavigation'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

const ProductNavigation: FC<{ productId: number }> = ({ productId }) => {
	const { nextProductSlug, prevProductSlug } = useProductNavigationts(productId)

	return (
		<div className={styles.nav}>
			<Link
				href={`/product/${prevProductSlug}`}
				className={cn({ disabled: !prevProductSlug })}
			>
				<ChevronLeftIcon fontSize={46} color='#222' />
			</Link>
			<Link
				href={`/product/${nextProductSlug}`}
				className={cn({ disabled: !nextProductSlug })}
			>
				<ChevronRightIcon fontSize={46} color='#222' />
			</Link>
		</div>
	)
}

export default ProductNavigation
