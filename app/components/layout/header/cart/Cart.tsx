import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'

import { useTypedSelector } from '@/components/hooks/useTypedSelector'

import { formatToCurrency } from '@/utils/format-to-currency'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)
	const cart = useTypedSelector(state => state.cart.items)
	const total = cart.reduce((acc, item) => acc + item.product.price, 0)

	return (
		<div className={styles['wrapper-cart']}>
			<button
				onClick={() => {
					setIsOpen(!isOpen)
				}}
				className={styles.heading}
				ref={btnRef}
			>
				<div className={styles.badge}>{cart.length}</div>
				<span className={styles.text}>My backet</span>
			</button>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={() => setIsOpen(false)}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>My basket</DrawerHeader>

					<DrawerBody>
						<div className={styles.cart}>
							{cart.map(item => (
								<CartItem item={item} key={item.id} />
							))}
						</div>
					</DrawerBody>

					<DrawerFooter
						justifyContent={'space-between'}
						borderTopColor={'#F7F4F0'}
						borderTopWidth={1}
					>
						<div className={styles.footer}>
							<div>Total:</div>
							<div>{formatToCurrency(total)}</div>
						</div>
						<Button colorScheme='green'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cart
