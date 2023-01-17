import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
import cn from 'classnames'

import './Select.scss'

interface SelectProps {
	label?: string
	children?: Array<JSX.Element | React.ReactElement>
}

type Props = SelectProps &
	ReturnType<typeof defaultProps> &
	React.ComponentProps<'button'>

const Select: FC<Props> = ({
	label,
	children,
	className,
	disabled,
	...props
}) => {
	const [optionRefs, setOptionRefs] = useState<
		Array<React.RefObject<HTMLLIElement>>
	>([])
	const [isSelectOpen, setIsSelectOpen] = useState(false)

	const labelOnClick = () => {
		setIsSelectOpen((prevState) => !prevState)
	}

	useLayoutEffect(() => {
		setOptionRefs(
			React.Children.toArray(children).map((_) =>
				React.createRef<HTMLLIElement>()
			)
		)
	}, [children])

	const View = (
		<>
			{isSelectOpen &&
				disabled !== true &&
				React.Children.map(children, (child, i) =>
					React.cloneElement(child as React.ReactElement, {
						ref: optionRefs[i],
					})
				)}
		</>
	)

	return (
		<div className="izi-select">
			<button
				className={cn('izi-select__label', {
					[String(className)]: className,
				})}
				onClick={labelOnClick}
				disabled={disabled}
				{...props}
			>
				{label}
			</button>

			<ul className="izi-select__options-list">{View}</ul>
		</div>
	)
}

function defaultProps(): SelectProps {
	return {
		label: 'Label not provided',
		children: [],
	}
}

Select.defaultProps = defaultProps()

export default Select
