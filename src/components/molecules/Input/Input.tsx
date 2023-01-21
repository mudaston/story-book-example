import React, { FC, JSXElementConstructor, useState, useEffect } from 'react'

import AnotherView, {
	Props as AnotherViewProps,
} from './Views/AnotherView/AnotherView'
import InputView, { Props as InputViewProps } from './Views/InputView/InputView'

// @ts-ignore
import { Model } from './models/model'

const Data = new Model()

const allowedViews = {
	AnotherView: 'AnotherView',
	InputView: 'InputView',
}

interface Props {
	children: JSX.Element | React.ReactElement | React.ReactNode
	initialValue?: string
	validators?: Array<(value: string) => string>
}

interface Subcomponents {
	AnotherView: FC<AnotherViewProps>
	InputView: FC<InputViewProps>
}

type InputProps = Props & ReturnType<typeof defaultProps>

const Input: FC<InputProps> & Subcomponents = ({
	initialValue,
	children,
	validators,
}) => {
	const [currentValue, setCurrentValue] = useState(initialValue)

	const onChangeForAnotherView = (value: string) => {
		setCurrentValue(value)
	}

	const onChangeForInputView = (value: string) => {
		setCurrentValue(value)
	}

	useEffect(() => {
		let validatedValue = currentValue

		if (validators)
			validatedValue = validators.reduce(
				(value, validator) => validator(value),
				validatedValue
			)

		Data.Value = validatedValue
	}, [currentValue])

	if (!React.isValidElement(children))
		throw new Error('Passed not allowed component')

	switch ((children.type as JSXElementConstructor<React.ReactElement>).name) {
		case allowedViews.AnotherView:
			return React.cloneElement(children, {
				// @ts-ignore
				value: initialValue.length ? initialValue : Data.Value,
				onChange: onChangeForAnotherView,
			})
		case allowedViews.InputView:
			return React.cloneElement(children, {
				// @ts-ignore
				value: initialValue.length ? initialValue : Data.Value,
				onChange: onChangeForInputView,
			})
	}

	throw new Error('Passed not allowed component')
}

function defaultProps() {
	return {
		initialValue: '',
		validators: [],
	}
}

Input.defaultProps = defaultProps()

Input.AnotherView = AnotherView
Input.InputView = InputView

export default Input
