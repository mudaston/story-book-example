import React from 'react'

type thenCb<T> = (value: T) => void

type catchCb = (reason?: any) => void

type executor<T> = (
	resolve: (value: T) => void,
	reject: (reason?: any) => void
) => void

class MyPromise<T> {
	private thenCb: Array<thenCb<T>> = []
	private catchCb: Array<catchCb> = []

	constructor(executor: executor<T>) {
		executor(this.resolve, this.reject)
	}

	private readonly resolve = (value: T) => {
		this.thenCb.forEach((then) => then(value))
	}

	private readonly reject = (reason?: any) => {
		this.catchCb.forEach((catchCB) => catchCB(reason))
	}

	public readonly then = (thenCb: thenCb<T>) => {
		this.thenCb.push(thenCb)

		return new MyPromise<T>((resolve, reject) => {})
	}

	public readonly catch = (catchCb: catchCb) => {
		this.catchCb.push(catchCb)

		return new MyPromise<T>((resolve, reject) => {})
	}

	public readonly finally = () => {}
}

const sleep = (ms: number = 100) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true)
		}, ms)
	})
}

const MyPromisePage = () => {
	const promise2 = new Promise(() => {})

	const promise = new MyPromise<string>((resolve, reject) => {
		setTimeout(() => {
			resolve('Hello world')
		})
	})

	promise
		.then((res) => {
			return res + 'awdawd'
		})
		.then((res) => {
			console.log(res)
		})

	return <div>MyPromise</div>
}

export default MyPromisePage
