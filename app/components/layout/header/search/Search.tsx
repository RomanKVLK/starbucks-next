import styles from './Search.module.scss'
import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FC, useState } from 'react'

const Search: FC = () => {
	const [searchValue, setSearchValue] = useState('')
	return (
		<div className={styles.search}>
			<InputGroup>
				<InputRightElement
					pointerEvents='none'
					color='gray.300'
					fontSize='1.2em'
					children={<SearchIcon color='gray.500' />}
				/>
				<Input
					placeholder='Search'
					variant='flushed'
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					_focusVisible={{
						borderColor: '#008464'
					}}
				/>
			</InputGroup>
		</div>
	)
}

export default Search
