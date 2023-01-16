import { Button, Value, Icon } from './components/Button'

import Image from './assets/Image'

function App() {
	return (
		<div style={{ marginLeft: '20px' }}>
			<h1>Test</h1>
			<Button
				variant="primary"
				onClick={() => {
					document.body.style.backgroundColor = `#${Math.floor(
						Math.random() * 16777215
					).toString(16)}`
				}}
			>
				<Value>Some text</Value>
			</Button>
		</div>
	)
}

export default App
