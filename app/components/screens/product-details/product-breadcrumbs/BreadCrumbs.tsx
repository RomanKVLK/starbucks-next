import { IProductDetails } from '@/types/product-details.interface'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Link
} from '@chakra-ui/react'
import { FC } from 'react'

const BreadCrumbs: FC<IProductDetails> = ({ product }) => {
	return (
		<div>
			<Breadcrumb
				color='#444'
				display='flex'
				justifyContent='end'
				marginTop={8}
			>
				<BreadcrumbItem>
					<BreadcrumbLink as={Link} href='/'>
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink
						_hover={{ textDecoration: 'none' }}
						cursor='default'
						color='#666'
					>
						{product.name}
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</div>
	)
}

export default BreadCrumbs
