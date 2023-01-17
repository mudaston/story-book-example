import React from 'react'
import cn from 'classnames'

import './Option.scss'

interface OptionProps {
	children: JSX.Element | React.ReactElement | React.ReactNode
}

type Props = OptionProps & React.ComponentProps<'li'>

const Option = React.forwardRef<HTMLLIElement, Props>(
	({ children, className, ...props }, ref) => {
		return (
			<li
				className={cn('izi-select__option', {
					[String(className)]: className,
				})}
				ref={ref}
				{...props}
			>
				{children}
			</li>
		)
	}
)

export default Option
