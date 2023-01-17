import React, { FC } from 'react'

import './Icon.scss'

interface IconProps {
	children: JSX.Element | React.ReactNode
}

type Props = IconProps

const Icon: FC<Props> = ({ children }) => {
	return <span className="izi-icon">{children}</span>
}

export default Icon
