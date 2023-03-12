import { cartSlice } from './slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReduser = combineReducers({
	cart: cartSlice.reducer
})

export const store = configureStore({
	reducer: rootReduser
})

export type TypeRootState = ReturnType<typeof rootReduser>
