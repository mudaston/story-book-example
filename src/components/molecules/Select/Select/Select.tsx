import React, { FC, useEffect, useLayoutEffect, useState, useRef } from 'react'
import cn from 'classnames'
import { useSelector } from 'react-redux'

import useAppDispatch from '../../../../hooks/useAppDispatch'

import type { Option, onOptionClick } from '../types'

import { addSelectedFilters } from '../../../../redux/selectedFiltersSlice'
import getSelectedFiltersByElementName from '../../../../redux/selectors/selectedFilters'

import './Select.scss'

interface SelectProps {
	nameOfFilter: string
	label?: string
	children?: Array<JSX.Element | React.ReactElement>
}

type Props = SelectProps &
	ReturnType<typeof defaultProps> &
	React.ComponentProps<'button'>

const Select: FC<Props> = ({
	nameOfFilter,
	label,
	children,
	className,
	disabled,
	...props
}) => {
	const dispatch = useAppDispatch()
	const selectedFiltersFromReducer = useSelector(
		getSelectedFiltersByElementName(nameOfFilter)
	)

	const [optionRefs, setOptionRefs] = useState<
		Array<React.RefObject<HTMLLIElement>>
	>([])
	const [isSelectOpen, setIsSelectOpen] = useState(false)

	const selectedOptions = useRef<Array<Option>>([])

	const labelOnClick = () => {
		setIsSelectOpen((prevState) => !prevState)
	}

	const onOptionClick: onOptionClick = (id: number, value: string) => {
		const hasThisFilter = selectedOptions.current.some(
			(currentFilter: Option) => currentFilter.id === id
		)

		const filtersWhereIdNotEqualToOptionId = selectedOptions.current.filter(
			(currentFilter: Option) => currentFilter.id !== id
		)

		const addNewValueToFilters = () => [
			...selectedOptions.current,
			{ id, value },
		]

		if (hasThisFilter) {
			selectedOptions.current = filtersWhereIdNotEqualToOptionId

			return
		}

		selectedOptions.current = [...addNewValueToFilters()]
	}

	// dispatch selected options to state if menu is closed
	useEffect(() => {
		if (isSelectOpen) return

		const filters = selectedOptions.current.map(({ id, value }) => ({
			id,
			content: value,
		}))

		dispatch(
			addSelectedFilters({
				name: nameOfFilter,
				filters,
			})
		)
	}, [isSelectOpen])

	useLayoutEffect(() => {
		setOptionRefs(
			React.Children.toArray(children).map((_) =>
				React.createRef<HTMLLIElement>()
			)
		)
	}, [children])

	useLayoutEffect(() => {
		if (selectedFiltersFromReducer !== undefined) return

		selectedOptions.current = []
	}, [selectedFiltersFromReducer])

	const OptionsView = (
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

			<ul className="izi-select__options-list">{OptionsView}</ul>
		</div>
	)
}

function defaultProps(): SelectProps {
	return {
		nameOfFilter: '',
		label: 'Label not provided',
		children: [],
	}
}

Select.defaultProps = defaultProps()

export default Select
