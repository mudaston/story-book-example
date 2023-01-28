function sortByDESC(array: Array<number>): Array<number> {
	const result = [...array]

	result.sort((a, b) => b - a)

	return result
}

export default sortByDESC
