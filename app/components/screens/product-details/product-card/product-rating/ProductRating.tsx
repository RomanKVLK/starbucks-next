import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProductDetails } from '@/types/product-details.interface'

const ProductRating: FC<IProductDetails> = ({ product }) => {
	const [rating, setRating] = useState(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)

	return (
		<div className='App'>
			<Rating
				readonly
				SVGstyle={{
					display: 'inline-block'
				}}
				transition
				allowFraction
				size={32}
				initialValue={rating}
			/>
		</div>
	)
}

export default ProductRating
