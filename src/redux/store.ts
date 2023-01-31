import { configureStore } from '@reduxjs/toolkit'

import { selectedFiltersSlice } from './selectors/selectedFiltersSlice/selectedFiltersSlice'

const store = configureStore({
	reducer: {
		[selectedFiltersSlice.name]: selectedFiltersSlice.reducer,
	},
})

export const state = store.getState()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
