import Input from './components/molecules/Input/Input'

import { toLowerCase, toUpperCase } from './helpers/validators'

function App() {
	return (
		<div style={{ display: 'flex', gap: '50px', maxWidth: 200 }}>
			<Input initialValue="Hello world" validators={[toLowerCase]}>
				<Input.AnotherView />
			</Input>
			<Input initialValue="World hello" validators={[toUpperCase]}>
				<Input.InputView />
			</Input>
		</div>
	)
}

export default App
