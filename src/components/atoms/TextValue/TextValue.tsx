import { FC } from 'react'

interface ValueProps {
	children: String
}

type Props = ValueProps

const TextValue: FC<Props> = ({ children }) => {
	return <span>{children}</span>
}

TextValue.displayName = 'TextValue'

export default TextValue
