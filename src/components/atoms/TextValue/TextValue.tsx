import { FC } from 'react'

import {
	textComponentCanOnlyContainsText,
	textComponentCannotBeEmpty,
} from '../../../errors/TextValue'

interface ValueProps {
	children: String
}

type Props = ValueProps

const TextValue: FC<Props> = ({ children }) => {
	if (!children) throw new Error(textComponentCannotBeEmpty)

	if (typeof children !== 'string')
		throw new Error(textComponentCanOnlyContainsText)

	return <span>{children}</span>
}

TextValue.displayName = 'TextValue'

export default TextValue
