import styles from './Layout.module.scss'
import Header from './header/Header'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'
import { FC, PropsWithChildren } from 'react'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<div className={styles.layout}>
				<main>
					<Header />
					<section>{children}</section>
				</main>
			</div>
		</>
	)
}

export default Layout