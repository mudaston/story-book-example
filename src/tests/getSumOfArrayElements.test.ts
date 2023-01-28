function sumOfArrayElements(array: Array<number>): number {
	return array.reduce((sum, currentValue) => sum + currentValue)
}

describe('get sum of array elements', () => {
	it('[1, 2, 3, 4, 5] expected to be 15', () => {
		const expectedToBe = 15

		expect(sumOfArrayElements([1, 2, 3, 4, 5])).toBe(expectedToBe)
	})

	it('[1, 4, 5, 6, 7, 2, 5] expected to be 23', () => {
		const expectedToBe = 30

		expect(sumOfArrayElements([1, 4, 5, 6, 7, 2, 5])).toBe(expectedToBe)
	})
})

export {}
