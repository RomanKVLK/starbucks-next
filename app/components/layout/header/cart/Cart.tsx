import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import {
	Button,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'

import { useCart } from '@/components/hooks/useCart'

import { formatToCurrency } from '@/utils/format-to-currency'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)
	const { cart, total } = useCart()

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
				<span className={styles.text}>My basket</span>
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
							{cart.length ? (
								cart.map(item => <CartItem item={item} key={item.id} />)
							) : (
								<div>Basket is empty</div>
							)}
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
