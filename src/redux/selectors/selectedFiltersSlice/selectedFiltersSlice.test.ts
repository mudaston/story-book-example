import '@testing-library/jest-dom'

import {
	selectedFiltersSlice,
	addSelectedFilters,
	resetFilter,
} from './selectedFiltersSlice'

describe('selectedFiltersSlice tests', () => {
	it('should return default state when passed an empty action', () => {
		const result = selectedFiltersSlice.reducer(undefined, { type: '' })

		expect(result).toStrictEqual({ elements: {} })
	})

	it('should add option to state', () => {
		// prepare
		const action: ReturnType<typeof addSelectedFilters> = {
			type: addSelectedFilters.type,
			payload: { name: 'test', filters: [{ id: 0, content: 'test' }] },
		}

		// expected value
		const expected = {
			elements: {
				test: [{ id: 0, content: 'test' }],
			},
		}

		const result = selectedFiltersSlice.reducer({ elements: {} }, action)

		expect(result).toStrictEqual(expected)
	})

	it('should reset filters by name', () => {
		// prepare
		const action: ReturnType<typeof resetFilter> = {
			type: resetFilter.type,
			payload: 'test',
		}

		// expected value
		const expected = {
			elements: {},
		}

		const result = selectedFiltersSlice.reducer(
			{
				elements: {
					test: [{ id: 0, content: 'test' }],
				},
			},
			action
		)

		expect(result).toStrictEqual(expected)
	})
})
