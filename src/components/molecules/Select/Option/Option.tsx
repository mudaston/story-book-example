import React from 'react'
import cn from 'classnames'

import { addSelectedFilters } from '../../../../redux/selectedFiltersSlice'
import useAppDispatch from '../../../../hooks/useAppDispatch'

import './Option.scss'

interface OptionProps {
	identificator?: number
	children: JSX.Element | React.ReactElement | React.ReactNode
}

type Props = OptionProps & React.ComponentProps<'li'>

const Option = React.forwardRef<HTMLLIElement, Props>(
	({ identificator, children, className, ...props }, ref) => {
		const dispatch = useAppDispatch()

		const onOptionClick = () => {
			dispatch(
				addSelectedFilters({
					name: 'department',
					filters: [
						{
							id: Number(identificator),
							content: String(children).replace('[object Object], ', ''),
						},
					],
				})
			)
		}

		return (
			<li
				className={cn('izi-select__option', {
					[String(className)]: className,
				})}
				ref={ref}
				onClick={onOptionClick}
				{...props}
			>
				{children}
			</li>
		)
	}
)

export default Option
