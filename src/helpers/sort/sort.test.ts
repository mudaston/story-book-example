import sortByASC from './sortByASC'
import sortByDESC from './sortByDESC'

describe('tests for sort methods', () => {
	const values = [6, 2, 5, 9, 1, 4]
	const sortedByASC = [1, 2, 4, 5, 6, 9]
	const sortedByDESC = [9, 6, 5, 4, 2, 1]

	it(`sort by ASC: [${[values]}] should be [${sortedByASC}]`, () => {
		expect(sortByASC(values)).toStrictEqual(sortedByASC)
	})

	it(`sort by ASC: [${[values]}] should be [${sortedByDESC}]`, () => {
		expect(sortByDESC(values)).toStrictEqual(sortedByDESC)
	})
})
