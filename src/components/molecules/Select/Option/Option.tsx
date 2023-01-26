import React from 'react'
import cn from 'classnames'

import type { onOptionClick } from '../types'

import { TextValue } from '../../../atoms'

import './Option.scss'

interface OptionProps {
	identificator?: number
	children: JSX.Element | React.ReactElement | React.ReactNode
	onOptionClick?: onOptionClick
}

type Props = OptionProps & React.ComponentProps<'li'>

const Option = React.forwardRef<HTMLLIElement, Props>(
	({ identificator, children, className, onOptionClick, ...props }, ref) => {
		const onClickHanlder = () => {
			const element = React.Children.toArray(children).find((element) => {
				if (!React.isValidElement(element)) return false

				if ((element as JSX.Element).type.name === TextValue.displayName)
					return true
			}) as React.ReactElement

			if (!element) {
				throw new Error(`${TextValue.displayName} component not passed!`)
			}

			const content: string = element.props.children

			onOptionClick!(Number(identificator), content)
		}

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
