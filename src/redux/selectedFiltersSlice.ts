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
		[key: string]: Element
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

			state.elements.name = {
				name,
				filters,
			}
		},
	},
})

export const {
	actions: { addSelectedFilters },
} = selectedFiltersSlice
