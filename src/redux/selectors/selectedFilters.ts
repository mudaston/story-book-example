import { createSelector } from '@reduxjs/toolkit'

import type { RootState } from '../store'
import { state } from '../store'

const getSelectedFiltersState = (state: RootState) =>
	state['selected-filters-slice'].elements

/* const getSelectedFiltersByElementName = createSelector(
	getSelectedFiltersState,
	(filters) => filters.find((filter) => filter.name === 'departments')
) */

const getSelectedFiltersByElementName = (name: string) =>
	createSelector(getSelectedFiltersState, (filters) => {
		const hasFilter = filters.find((filter) => filter.name === name)

		if (hasFilter) return hasFilter.filters

		return []
	})

export default getSelectedFiltersByElementName
