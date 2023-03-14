import { products } from '@/data/product.data'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Catalog from '@/ui/catalog/Catalog'

const Home: FC = () => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sigm up for Starbucks Rewards, menage your gift card and more'
			image={''}
			type={''}
		>
			<div>
				<Catalog products={products} />
			</div>
		</Layout>
	)
}

export default Home
