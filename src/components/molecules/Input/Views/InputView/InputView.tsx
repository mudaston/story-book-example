import { FC, useState, ChangeEvent, KeyboardEvent } from 'react'

import './InputView.scss'

export interface Props {
	value?: string
	onChange?: (value: string) => void
}

type InputViewProps = Props

const InputView: FC<InputViewProps> = ({ value, onChange }) => {
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
			className="input-view"
			type="text"
			onChange={onChangeHandler}
			onKeyDown={onEnterPress}
			value={currentValue}
		/>
	)
}
InputView.displayName = 'InputView'

export default InputView
