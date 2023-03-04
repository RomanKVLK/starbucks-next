import styles from './Menu.module.scss'
import { menu } from './menu-item.data'
import MenuItem from './menu-item/MenuItem'
import { IMenuLink } from './menu-item/menu-item.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<Link href='/'>
				<Image
					src='/images/starbucks-logo.svg'
					width={100}
					height={100}
					alt='Starbucks'
				/>
			</Link>
			<nav>
				<ul className={styles.menuList}>
					{menu.map((item: IMenuLink) => (
						<MenuItem key={item.name} item={item} />
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Menu
