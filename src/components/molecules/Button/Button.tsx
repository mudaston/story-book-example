import { FC, ReactNode, ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import './Button.scss'

interface OwnProps {
	children: JSX.Element | ReactNode | String
	variant?: 'primary' | 'secondary'
}

type Props = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({ children, variant, className, ...props }) => {
	return (
		<button
			className={cn('button', {
				[variant || 'default']: true,
				[String(className)]: className,
			})}
			type="button"
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
