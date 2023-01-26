import { createSelector } from '@reduxjs/toolkit'

import type { RootState } from '../store'

const getSelectedFiltersState = (state: RootState) =>
	state['selected-filters-slice']

const getSelectedFiltersByElementName = (name: string) =>
	createSelector(getSelectedFiltersState, (state) => {
		return state.elements[name]
	})

export default getSelectedFiltersByElementName
