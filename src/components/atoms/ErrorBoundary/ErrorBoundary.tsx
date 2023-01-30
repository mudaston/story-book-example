import React, { Component } from 'react'

import './ErrorBoundary.scss'

type Props = {
	children: React.ReactNode
}

type State = {
	errorOccured: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
	state = {
		errorOccured: false,
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		setTimeout(() => {
			this.setState((prevState) => ({ ...prevState, errorOccured: false }))
		}, 5_000)

		this.setState((prevState) => ({ ...prevState, errorOccured: true }))
	}

	render() {
		const { errorOccured } = this.state
		const { children } = this.props

		const View = !errorOccured && children
		const Error = errorOccured && (
			<div className="error-boundary">
				<span>Oopsy...</span>
			</div>
		)

		return (
			<>
				{View}
				{Error}
			</>
		)
	}
}
