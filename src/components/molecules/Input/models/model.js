export class Model {
	#value = ''

	set Value(value) {
		console.log(value)

		this.#value = value
	}

	get Value() {
		return this.#value
	}
}
