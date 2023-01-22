import { Select, Option } from './components/molecules/Select'
import Icon from './components/atoms/Icon'

function App() {
	

	return (
		<div style={{ maxWidth: 200 }}>
			<Select label="Select an option">
				<Option identificator={0}>
					<Icon>❤</Icon> Hello world <Icon>❤</Icon>
				</Option>
				<Option identificator={1}>World hello!</Option>
			</Select>

		</div>
	)
}

export default App
