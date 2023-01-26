import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Filter {
	id: number
	content: string
}

interface Element {
	name: string
	filters: Array<Filter>
}

interface InitialState {
	elements: {
		[key: string]: Array<Filter>
	}
}

const initialState: InitialState = {
	elements: {},
}

export const selectedFiltersSlice = createSlice({
	name: 'selected-filters-slice',
	initialState,
	reducers: {
		addSelectedFilters(state, action: PayloadAction<Element>) {
			const { filters, name } = action.payload

			if (!filters.length) {
				delete state.elements[name]

				return
			}

			state.elements[name] = filters
		},
		/**
		 * @param state - state of reducer
		 * @param action - type of action and payload it's a name of filter
		 */
		resetFilter(state, action: PayloadAction<string>) {
			const nameOfFilter = action.payload

			delete state.elements[nameOfFilter]
		},
	},
})

export const {
	actions: { addSelectedFilters, resetFilter },
} = selectedFiltersSlice
