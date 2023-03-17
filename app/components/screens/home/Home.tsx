import { products } from '@/data/product.data'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Catalog from '@/ui/catalog/Catalog'
import Heading from '@/ui/heading/Heading'

const Home: FC = () => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sigm up for Starbucks Rewards, menage your gift card and more'
			image={''}
			type={''}
		>
			<Heading>The happiest hour of the year</Heading>
			<Catalog products={products} />
		</Layout>
	)
}

export default Home
