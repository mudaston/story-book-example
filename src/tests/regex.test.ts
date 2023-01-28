function regex(): RegExp {
	const regex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	return regex
}

describe('should validate email', () => {
	it('twil.revaas@gmail.com', () => {
		const str = `twil.vasilenko@gmail.com`
		const subst = ``

		const result = str.replace(regex(), subst)

		expect(result).toBe('')
	})

	it('mudaston.work@gmail.com', () => {
		const str = `mudaston.work@gmail.com`
		const subst = ``

		const result = str.replace(regex(), subst)

		expect(result).toBe('')
	})
})

export {}
