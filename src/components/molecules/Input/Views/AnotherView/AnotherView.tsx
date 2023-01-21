import { ChangeEvent, FC, useState, KeyboardEvent } from 'react'

import './AnotherView.scss'

export interface Props {
	value?: string
	onChange?: (value: string) => void
}

type AnotherViewProps = Props

const AnotherView: FC<AnotherViewProps> = ({ value, onChange }) => {
	const [currentValue, setCurrentValue] = useState(value || '')

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentValue(e.target.value)
	}

	const onEnterPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			onChange!(currentValue)
		}
	}

	return (
		<input
			className="another-view"
			type="text"
			onChange={onChangeHandler}
			onKeyDown={onEnterPress}
			value={currentValue}
		/>
	)
}
AnotherView.displayName = 'AnotherView'

export default AnotherView
