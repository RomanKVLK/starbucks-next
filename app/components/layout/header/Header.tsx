import styles from './Header.module.scss'
import Cart from './cart/Cart'
import Menu from './menu/Menu'
import Search from './search/Search'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Menu />
			<Search />
			<Cart />
		</header>
	)
}

export default Header
