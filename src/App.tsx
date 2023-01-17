import { Select, Option } from './components/molecules/Select'
import Icon from './components/atoms/Icon'

function App() {
	return (
		<div style={{ maxWidth: 200 }}>
			<Select label="Select an option">
				<Option onClick={() => console.log('CLICK')}>
					<Icon>❤</Icon> Hello world
				</Option>
				<Option>Hello world</Option>
			</Select>
		</div>
	)
}

export default App
