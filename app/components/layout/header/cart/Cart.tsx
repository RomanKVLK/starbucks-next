import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { cart } from '@/data/cart.data'
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

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)
	return (
		<div className={styles['wrapper-cart']}>
			<button
				onClick={() => {
					setIsOpen(!isOpen)
				}}
				className={styles.heading}
				ref={btnRef}
			>
				<div className={styles.badge}>1</div>
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
					<DrawerHeader>My cart</DrawerHeader>

					<DrawerBody>
						<div className={styles.cart}>
							{cart.map(item => (
								<CartItem item={item} key={item.id} />
							))}
						</div>
					</DrawerBody>

					<DrawerFooter>
						<Button colorScheme='green'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cart
