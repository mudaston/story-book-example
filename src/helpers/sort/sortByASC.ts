function sortByASC(array: Array<number>): Array<number> {
	const result = [...array]

	result.sort((a, b) => a - b)

	return result
}

export default sortByASC
