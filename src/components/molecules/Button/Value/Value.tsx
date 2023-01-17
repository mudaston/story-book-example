import { FC, ReactNode } from 'react'

interface OwnProps {
	children: JSX.Element | ReactNode | String
}

export type Props = OwnProps

const Value: FC<Props> = ({ children }) => {
	return <span>{children}</span>
}

export default Value
