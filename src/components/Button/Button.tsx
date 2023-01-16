import { FC, ReactNode, ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import './button.scss'

interface OwnProps {
	children: JSX.Element | ReactNode | String
	variant?: 'primary' | 'secondary'
}

type Props = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({ children, variant, ...props }) => {
	return (
		<button
			className={cn('button', {
				[variant || 'default']: true,
			})}
			type="button"
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
