import React from 'react'

/* type Charger = () => void

interface ChargerBlockParams {
	chargeSpeed: number
}

function ChargerBlock(params: ChargerBlockParams) {
	const { chargeSpeed } = params

	const _chargeSpeed = chargeSpeed

	let chargeIntervalID: ReturnType<typeof setInterval> | undefined = undefined
	const chargeCapacity = 100

	return function (this: BaseSmartphone) {
		chargeIntervalID = setInterval(() => {
			if (this.chargeLevel + _chargeSpeed > chargeCapacity) {
				const remainingCharge = chargeCapacity - this.chargeLevel

				this.chargeLevel += remainingCharge

				return
			}

			this.chargeLevel += _chargeSpeed
		}, 1000)
	}
}

interface Smartphone {
	turnOn(): void
	turnOff(): void

	displayChargeLevel(): void
	setLightness(level: number): void
	chargePhone(): void

	get name(): string
}

interface SmarphoneParams {
	charger: Charger
}

class BaseSmartphone implements Smartphone {
	public _name = 'Base Phone'
	private power = false
	private lightness = 100

	// charge
	protected chargeLevel = 5
	private charger: Charger
	private chargeDepletionIntervalID: ReturnType<typeof setInterval> | undefined

	constructor(params: SmarphoneParams) {
		const { charger } = params

		this.charger = charger
		this.charger.bind(this)
	}

	public get name() {
		return this._name
	}

	private phoneTurnedOn(): boolean {
		return this.power
	}

	private chargeDepletion() {
		const phoneIsLow = 0

		this.chargeDepletionIntervalID = setInterval(() => {
			if (this.chargeLevel === phoneIsLow) {
				this.turnOff()

				return
			}

			this.chargeLevel -= 1
		}, 1000)
	}

	public chargePhone(): void {
		this.charger()
	}

	public turnOn(): void {
		this.power = true

		this.chargeDepletion()
	}

	public turnOff(): void {
		this.power = false

		clearInterval(this.chargeDepletionIntervalID)
	}

	public displayChargeLevel(): void {
		if (!this.phoneTurnedOn()) return

		console.log(`Charge level: ${this.chargeLevel}%`)
	}

	public setLightness(level: number): void {
		if (!this.phoneTurnedOn()) return

		this.lightness = level
	}
}

interface Human {
	sayName(): void
	usePhone(phone: Smartphone): void
}

enum genders {
	MALE,
	FEMALE,
	TRANSGENDER,
}

interface BaseHumanParams {
	name: string
	age: number
	gender: genders
}

class BaseHuman implements Human {
	public gender: genders
	public phone: Smartphone | null = null

	private name: string
	private age: number

	constructor(params: BaseHumanParams) {
		const { name, age, gender } = params

		this.name = name
		this.age = age
		this.gender = gender
	}

	sayName(): void {
		console.log(`my name is ${this.name}`)
	}

	usePhone(phone: Smartphone): void {
		this.phone = phone
	}

	turnOnPhone() {
		this.phone?.turnOn()
	}

	checkPhoneChargeLevel() {
		this.phone?.displayChargeLevel()
	}

	chargePhone() {
		this.phone?.chargePhone()
	}

	sayPhoneMark() {
		console.log(this.phone?.name)
	}
}

class IPhone extends BaseSmartphone {
	constructor(params: SmarphoneParams) {
		super(params)

		this._name = 'IPhone'
	}
} */

const Closure = () => {
	/* const typeC = ChargerBlock({ chargeSpeed: 10 })

	const phone = new IPhone({ charger: typeC })

	const human = new BaseHuman({
		age: 21,
		name: 'Renat',
		gender: genders.FEMALE,
	})

	human.sayName()
	human.usePhone(phone)
	human.turnOnPhone()
	setInterval(() => {
		human.checkPhoneChargeLevel()
	}, 100)
	human.sayPhoneMark() */

	/* function promiseAll(promises) {
		const results = []

		return new Promise((resolve, reject) => {
			for (let i = 0; i < promises.length; i++) {
				promises[i]
					.then((res) => {
						results[i] = res

						if (results.length === promises.length) resolve(results)
					})
					.catch((error) => {
						reject(error)
					})
			}
		})
	}

	const testPromise1 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('first promise')
		}, 5_000)
	})

	const testPromise2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('second promise')
		}, 2_000)
	})

	;(async () => {
		promiseAll([testPromise1, testPromise2])
			.then((res) => console.log('results: ', res))
			.catch(console.error)
	})() */

	const [count, setCount] = React.useState(0)
	const [isActive, setIsActive] = React.useState(true)

	React.useLayoutEffect(() => {
		let timerID: ReturnType<typeof setInterval>

		if (isActive) {
			timerID = setInterval(() => {
				setCount((count) => count + 1)
			}, 1_000)
		}

		return () => {
			clearInterval(timerID)
		}
	}, [isActive])

	const buttonContent = isActive ? 'Stop' : 'Start'

	return (
		<div>
			<div>{count}</div>
			<button onClick={() => setIsActive((active) => !active)}>
				{buttonContent}
			</button>
		</div>
	)
}

export default Closure
