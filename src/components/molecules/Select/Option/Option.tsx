import React from 'react'
import cn from 'classnames'
import { useSelector } from 'react-redux'

import { addSelectedFilters } from '../../../../redux/selectedFiltersSlice'
import getSelectedFiltersByElementName from '../../../../redux/selectors/selectedFilters'
import useAppDispatch from '../../../../hooks/useAppDispatch'
import { state } from '../../../../redux/store'

import './Option.scss'

interface OptionProps {
	identificator?: number
	children: JSX.Element | React.ReactElement | React.ReactNode
}

type Props = OptionProps & React.ComponentProps<'li'>

const Option = React.forwardRef<HTMLLIElement, Props>(
	({ identificator, children, className, ...props }, ref) => {
		const dispatch = useAppDispatch()
		const selectedFilters = useSelector(
			getSelectedFiltersByElementName('department')
		)

		console.log({ selectedFilters })

		const onOptionClick = () => {
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

			dispatch(
				addSelectedFilters({
					name: 'department',
					filters: [
						{
							id: Number(identificator),
							content,
						},
					],
				})
			)
		}

		return (
			<li
				className={cn('izi-select__option-wrapper', {
					[String(className)]: className,
				})}
				ref={ref}
				{...props}
			>
				<div className="izi-select__option" onClick={onOptionClick}>
					{children}
				</div>
			</li>
		)
	}
)

export default Option
