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
	elements: Array<Element>
}

const initialState: InitialState = {
	elements: [],
}

export const selectedFiltersSlice = createSlice({
	name: 'selected-filters-slice',
	initialState,
	reducers: {
		addSelectedFilters(state, action: PayloadAction<Element>) {
			state.elements = state.elements.filter(
				(elem) => elem.name !== action.payload.name
			)

			state.elements = [
				...state.elements,
				{ name: action.payload.name, filters: action.payload.filters },
			]
		},
	},
})

export const {
	actions: { addSelectedFilters },
} = selectedFiltersSlice
