const sum = (a: number, b: number): number => {
	return a + b
}

function addTwoArrays<T>(first: Array<T>, second: Array<T>): Array<T> {
	return [...first, ...second]
}

describe('should return sum of two numbers', () => {
	it('sum of 1 and 2 expect to be 3', () => {
		expect(sum(1, 2)).toBe(3)
	})

	it('sum of 1 and 4 expect to be 5', () => {
		expect(sum(1, 4)).toBe(5)
	})

	it('sum of 10 and -5 expect to be 5', () => {
		expect(sum(10, -5)).toBe(5)
	})
})

describe('should return unit of two arrays', () => {
	it('addTwoArrays([1,2,3],[4,5,6]) should be equal [1,2,3,4,5,6]', () => {
		const first = [1, 2, 3]
		const second = [4, 5, 6]

		const result = addTwoArrays(first, second)
		const expectedResult = [1, 2, 3, 4, 5, 6]

		expect(result).toEqual(expectedResult)
	})
})

export {}
