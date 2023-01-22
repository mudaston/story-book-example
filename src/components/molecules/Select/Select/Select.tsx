import React, { FC, useEffect, useLayoutEffect, useState, useRef } from 'react'
import useAppDispatch from '../../../../hooks/useAppDispatch'
import cn from 'classnames'

import type { Option, onOptionClick } from '../types'

import { addSelectedFilters } from '../../../../redux/selectedFiltersSlice'

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
	const dispatch = useAppDispatch()

	const [optionRefs, setOptionRefs] = useState<
		Array<React.RefObject<HTMLLIElement>>
	>([])
	const [isSelectOpen, setIsSelectOpen] = useState(false)

	const selectedOptions = useRef<Array<Option>>([])

	const labelOnClick = () => {
		setIsSelectOpen((prevState) => !prevState)
	}

	const onOptionClick: onOptionClick = (id: number, value: string) => {
		selectedOptions.current = [...selectedOptions.current, { id, value }]
	}

	useLayoutEffect(() => {
		setOptionRefs(
			React.Children.toArray(children).map((_) =>
				React.createRef<HTMLLIElement>()
			)
		)
	}, [children])

	// dispatch selected options to state if menu is closed and some option selected
	useEffect(() => {
		if (isSelectOpen) return
		if (!selectedOptions.current.length) return

		dispatch(
			addSelectedFilters({
				name: 'department',
				filters: selectedOptions.current.map(({ id, value }) => ({
					id,
					content: value,
				})),
			})
		)
	}, [isSelectOpen])

	const View = (
		<>
			{isSelectOpen &&
				disabled !== true &&
				React.Children.map(children, (child, i) =>
					React.cloneElement(child as React.ReactElement, {
						ref: optionRefs[i],
						onOptionClick,
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
