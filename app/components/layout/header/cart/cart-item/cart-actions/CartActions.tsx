import { ICartItem } from '@/types/cart-item.interface'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'

import { useActions } from '@/components/hooks/useActions'
import { useCart } from '@/components/hooks/useCart'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	const { cart } = useCart()
	const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

	const { removeFromCart, changeQuantity } = useActions()
	return (
		<div>
			<HStack>
				<Button
					{...dec}
					onClick={() => {
						changeQuantity({ id: item.id, type: 'minus' })
					}}
					disabled={quantity === 1}
				>
					<MinusIcon />
				</Button>
				<Input
					{...input}
					focusBorderColor='green.400'
					readOnly
					_hover={{ cursor: 'default' }}
					value={cart.find(cartItem => cartItem.id === item.id)?.quantity}
				/>
				<Button
					{...inc}
					onClick={() => {
						changeQuantity({ id: item.id, type: 'plus' })
					}}
				>
					<AddIcon />
				</Button>
			</HStack>
			<Button
				variant={'unstyled'}
				color='#F23C3D'
				marginTop={2}
				size='sm'
				opacity={0.8}
				onClick={() => removeFromCart({ id: item.id })}
			>
				Remove
			</Button>
		</div>
	)
}

export default CartActions
