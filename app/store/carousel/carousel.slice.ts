import { ICarouselInitialState } from './carousel.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ICarouselInitialState = {
	selectedItemIndex: 0
}

export const carouselSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		nextSlide: (state, action: PayloadAction<{ carouselLenght: number }>) => {
			if (state.selectedItemIndex !== action.payload.carouselLenght - 1)
				state.selectedItemIndex += 1
		},
		prevSlide: state => {
			if (state.selectedItemIndex > 0) state.selectedItemIndex -= 1
		},
		selectSlide: (state, action: PayloadAction<number>) => {
			state.selectedItemIndex = action.payload
		}
	}
})
