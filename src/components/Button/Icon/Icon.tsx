import { FC, ReactNode } from 'react'

import './icon.scss'

interface OwnProps {
	children: JSX.Element | ReactNode | String
}

type Props = OwnProps

const Icon: FC<Props> = ({ children }) => {
	return <div className="icon">{children}</div>
}

export default Icon
