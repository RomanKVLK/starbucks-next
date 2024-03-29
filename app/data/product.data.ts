import { reviews } from './review.data'

import { IProduct } from '@/types/product.interface'

export const products: IProduct[] = [
	{
		id: 1,
		description:
			'Sweet pistachio flavor blended with coffee, milk and ice, then finished with whipped cream and a salted brown-buttery topping—an icy-smooth, creamy delight to bring you into the new year.',
		name: 'Pistachio Frappuccino® Blended Beverage',
		slug: 'pistachio-frappuccino-blended-beverage',
		images: [
			'/images/products/Pistachio-Frappuccino.png',
			'/images/products/Mocha-Cookie-Crumble-Frappuccino.png'
		],
		price: 9,
		reviews: [reviews[0], reviews[1], reviews[2], reviews[3]]
	},
	{
		id: 2,
		description:
			'Frappuccino® Roast coffee, mocha sauce and Frappuccino® chips blended with milk and ice, layered on top of whipped cream and chocolate cookie crumble and topped with vanilla whipped cream, mocha drizzle and even more chocolate cookie crumble.',
		name: 'Mocha-Coffee Cookie Crumble Frappuccino',
		slug: 'mocha-coffee-cookie-crumble-frappuccino',
		images: ['/images/products/Mocha-Cookie-Crumble-Frappuccino.png'],
		price: 8,
		reviews: [reviews[0], reviews[1], reviews[2], reviews[3]]
	},
	{
		id: 3,
		description:
			'Buttery caramel syrup blended with coffee, milk and ice, then topped with a layer of dark caramel sauce, whipped cream, caramel drizzle and a crunchy caramel-sugar topping—oh-so-beautifully delicious.',
		name: 'Caramel Ribbon Cookie Crunch Frappuccino',
		slug: 'caramel-ribbon-crunch-frappuccino',
		images: ['/images/products/Caramel-Ribbon-Crunch-Frappuccino.png'],
		price: 9,
		reviews: [reviews[0], reviews[1], reviews[2], reviews[3]]
	},
	{
		id: 4,
		description:
			'Coffee is combined with a shot of espresso and milk, then blended with ice to give you a nice little jolt and lots of sipping joy.',
		name: 'Espresso Frappuccino Blended Beverage',
		slug: 'espresso-frappuccino-blended-beverage',
		images: ['/images/products/Espresso-Frappuccino-Blended-Beverage.png'],
		price: 11,
		reviews: [reviews[0], reviews[1], reviews[2], reviews[3]]
	},
	{
		id: 5,
		description:
			'We blend mocha sauce and Frappuccino® chips with coffee, milk and ice, then top it off with whipped cream and a mocha drizzle to bring you endless java joy.',
		name: 'Java Chip Frappuccino Blended Beverage',
		slug: 'java-chip-frappuccino-blended-beverage',
		images: ['/images/products/Java-Chip-Frappuccino-Blended-Beverage.png'],
		price: 10,
		reviews: [reviews[0], reviews[1], reviews[2], reviews[3]]
	},
	{
		id: 6,
		description:
			'Mocha sauce, Frappuccino® Roast coffee, milk and ice all come together for a mocha flavor thatll leave you wanting more. To change things up, try it affogato-style with a hot espresso shot poured right over the top.',
		name: 'Mocha Frappuccino Blended Beverage',
		slug: 'mocha-frappuccino-blended-beverage',
		images: ['/images/products/Mocha-Frappuccino-Blended-Beverage.png'],
		price: 9,
		reviews: [reviews[0], reviews[1], reviews[2], reviews[3]]
	},
	{
		id: 7,
		description:
			'We take Frappuccino® roast coffee and vanilla bean powder, combine them with milk and ice, topped with whipped cream. Tastes like happiness.',
		name: 'Caffè Vanilla Frappuccino® Blended Beverage',
		slug: 'caffe-vanilla-frappuccino-blended-beverage',
		images: ['/images/products/Mocha-Frappuccino-Blended-Beverage.png'],
		price: 11,
		reviews: [reviews[0], reviews[1], reviews[2], reviews[3]]
	}
]
