import { cartSlice } from './slice'
import {
	combineReducers,
	configureStore,
	getDefaultMiddleware
} from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'starbucks',
	storage,
	whitelist: ['cart']
}

const rootReduser = combineReducers({
	cart: cartSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReduser)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReduser>
