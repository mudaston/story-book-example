import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './redux/store'

import App from './App'
import LazyImport from './pages/LazyImport'
import Closure from './pages/Closure'
import TodoList from './pages/TodoList/TodoList'
import ErrorBoundary from './components/atoms/ErrorBoundary/ErrorBoundary'
import MyPromisePage from './pages/MyPromise/MyPromise'

import './index.css'
import './styles/main.scss'
import './scss/src/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		{/* <App /> */}
		{/* <LazyImport /> */}
		{/* <Closure /> */}
		{/* <TodoList /> */}
		<MyPromisePage />
	</Provider>
)
