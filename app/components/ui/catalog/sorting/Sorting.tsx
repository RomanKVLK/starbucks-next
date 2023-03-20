import { sortingData } from './sorting.data'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FC } from 'react'

const Sorting: FC = () => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				Actions
			</MenuButton>
			<MenuList>
				{sortingData.map(sort => (
					<MenuItem key={sort.value}>{sort.label}</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default Sorting
