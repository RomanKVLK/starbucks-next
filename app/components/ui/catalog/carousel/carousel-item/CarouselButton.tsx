import { ICarouselButton } from '@/types/carousel-variations.interface'
import { Button } from '@chakra-ui/react'
import { FC } from 'react'

import { COLORS } from '@/components/config/color.config'
import { useActions } from '@/components/hooks/useActions'

const CarouselButton: FC<ICarouselButton> = ({ product, selectedSize }) => {
	const { addToCart } = useActions()
	return (
		<div>
			<Button
				color={COLORS.black}
				className='tracking-widest'
				onClick={() => addToCart({ product, quantity: 1, size: selectedSize })}
				marginTop={10}
				borderRadius={20}
				fontWeight={500}
				textTransform='uppercase'
				fontSize={12}
			>
				Add to basket
			</Button>
		</div>
	)
}

export default CarouselButton
