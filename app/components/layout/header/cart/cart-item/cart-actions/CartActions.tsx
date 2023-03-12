import { ICartItem } from '@/types/cart-item.interface'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'

import { useActions } from '@/components/hooks/useActions'

import { cartSlice } from '@/store/slice'

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

	const { removeFromCart } = useActions()
	return (
		<div>
			<HStack>
				<Button {...dec}>
					<MinusIcon />
				</Button>
				<Input
					{...input}
					focusBorderColor='green.400'
					readOnly
					_hover={{ cursor: 'default' }}
				/>
				<Button {...inc}>
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
