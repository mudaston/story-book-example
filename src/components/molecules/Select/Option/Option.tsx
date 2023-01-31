import React from 'react'
import cn from 'classnames'

import type { onOptionClick } from '../types'

import { TextValue } from '../../../atoms'
import {
	optionComponentCannotBeEmpty,
	optionComponentShouldHaveIdentificatorProp,
	optionComponentShouldHaveTextValueComponentAsChildren,
} from './utils/error'

import './Option.scss'

interface OptionProps {
	identificator?: number
	children: React.ReactNode
	onOptionClick?: onOptionClick
}

type Props = OptionProps & React.ComponentProps<'li'>

const Option = React.forwardRef<HTMLLIElement, Props>(
	({ identificator, children, className, onOptionClick, ...props }, ref) => {
		const onClickHanlder = () => {
			const TextValueComponent = findTextValueComponent()

			const content: string = TextValueComponent.props.children

			onOptionClick!(Number(identificator), content)
		}

		const findTextValueComponent = (): React.ReactElement => {
			const element = React.Children.toArray(children).find((element) => {
				if (!React.isValidElement(element)) return false

				if ((element as JSX.Element).type.name === TextValue.displayName)
					return true
			}) as React.ReactElement

			return element
		}

		// error handling
		React.useLayoutEffect(() => {
			const childrenNotPassed = typeof children === 'undefined'
			const identificatorNotPassed = typeof identificator === 'undefined'
			const TextValueComponentNotPassed = (element: React.ReactElement) =>
				typeof element === 'undefined'

			if (childrenNotPassed) throw new Error(optionComponentCannotBeEmpty)
			if (identificatorNotPassed)
				throw new Error(optionComponentShouldHaveIdentificatorProp)

			// check if Option have TextValue component
			if (TextValueComponentNotPassed(findTextValueComponent())) {
				throw new Error(optionComponentShouldHaveTextValueComponentAsChildren)
			}
		}, [])

		return (
			<li
				className={cn('izi-select__option-wrapper', {
					[String(className)]: className,
				})}
				ref={ref}
				{...props}
			>
				<div className="izi-select__option" onClick={onClickHanlder}>
					{children}
				</div>
			</li>
		)
	}
)

export default Option
