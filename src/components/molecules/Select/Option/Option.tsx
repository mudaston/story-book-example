import React from 'react'
import cn from 'classnames'

import type { onOptionClick } from '../types'

import './Option.scss'

interface OptionProps {
	identificator?: number
	children: JSX.Element | React.ReactElement | React.ReactNode
	onOptionClick?: onOptionClick
}

type Props = OptionProps & React.ComponentProps<'li'>

const Option = React.forwardRef<HTMLLIElement, Props>(
	({ identificator, children, className, onOptionClick, ...props }, ref) => {
		const onClickHanlder = (e: React.MouseEvent<HTMLDivElement>) => {
			// Remove unwanted values
			// * like [object Object] *
			let regex = /(^\s+)|(\[(.*?)\]|[^A-Z|a-z|а-яА-Я| ])/gm

			const str = String(children)
			const subst = ``

			let content = str.replace(regex, subst)

			// remove spaces from begin and end of string
			regex = /^\s+|\s+$/gm

			content = content.replace(regex, subst)

			// replace multiple spaces with one
			regex = /\s\s+/gm

			content = content.replace(regex, ' ')

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
