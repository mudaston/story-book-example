import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './scss/src/global.scss'

import store from './redux/store'

import App from './App'
import LazyImport from './pages/LazyImport'

import './index.css'

import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		{/* <App /> */}
		<LazyImport />
	</Provider>
)
