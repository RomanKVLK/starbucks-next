import { Button } from '@chakra-ui/react'
import { FC } from 'react'

import { COLORS } from '@/components/config/color.config'
import { useActions } from '@/components/hooks/useActions'
import { useCart } from '@/components/hooks/useCart'

import { IAddToCartButton } from '@/types/carousel-variations.interface'

const AddToCartButton: FC<IAddToCartButton> = ({ product, selectedSize }) => {
	const { addToCart, removeFromCart } = useActions()
	const { cart } = useCart()
	const currentElement = cart.find(
		itemCart =>
			itemCart.product.id === product.id && itemCart.size === selectedSize
	)

	const isSmall = variant === 'small'
	return (
		<div>
			<Button
				color={isSmall ? COLORS.green : COLORS.white}
				backgroundColor={isSmall ? undefined : COLORS['dark-green']}
				_hover={{
					backgroundColor: isSmall ? undefined : COLORS['light-green']
				}}
				className='tracking-widest'
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({ product, quantity: 1, size: selectedSize })
				}
				marginTop={10}
				borderRadius={20}
				fontWeight={500}
				textTransform='uppercase'
				fontSize={isSmall ? 12 : 16}
			>
				{currentElement ? 'Remove from basket' : 'Add to basket'}
			</Button>
		</div>
	)
}

export default AddToCartButton
