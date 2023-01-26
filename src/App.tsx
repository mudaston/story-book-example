import React from 'react'
import { useSelector } from 'react-redux'

import useAppDispatch from './hooks/useAppDispatch'
import { resetFilter } from './redux/selectedFiltersSlice'
import getSelectedFiltersByElementName from './redux/selectors/selectedFilters'

import { Select, Option } from './components/molecules/Select'
import { Button, Value } from './components/molecules/Button'
import Icon from './components/atoms/Icon'

function App() {
	const [dispatcherState, setDispatcherState] = React.useState({})

	const selectedFiltersDepartments = useSelector(
		getSelectedFiltersByElementName('department')
	)
	const selectedFiltersNames = useSelector(
		getSelectedFiltersByElementName('names')
	)
	const dispatch = useAppDispatch()

	const resetFiltersOnClick = () => {
		dispatch(resetFilter('department'))
	}

	const resetNamesOnClick = () => {
		dispatch(resetFilter('names'))
	}

	const Dispatcher = () => (data: any) => {
		if (data === undefined) {
			setDispatcherState({})

			return
		}

		setDispatcherState((prevState) => ({ ...prevState, ...data }))
	}

	const callback = Dispatcher()

	React.useEffect(() => {
		callback(selectedFiltersNames)
	}, [selectedFiltersNames])

	React.useEffect(() => {
		console.log({ dispatcherState })
	}, [dispatcherState])

	return (
		<div style={{ maxWidth: 200 }}>
			<div style={{ display: 'flex', gap: '10px' }}>
				<Select label="Select an option" nameOfFilter="department">
					<Option identificator={0}>
						<Icon>❤</Icon> Hello world <Icon>❤</Icon>
					</Option>
					<Option identificator={1}>World hello!</Option>
				</Select>
				<Select label="Select a name" nameOfFilter="names">
					<Option identificator={0}>
						<Icon>❤</Icon> Kirill <Icon>❤</Icon>
					</Option>
					<Option identificator={1}>Renat</Option>
				</Select>
			</div>
			<div>
				<h1>Selected filters department:</h1>
				<Button variant="primary" onClick={resetFiltersOnClick}>
					<Value>Reset filters</Value>
				</Button>
				<ul>
					{selectedFiltersDepartments?.map(({ id, content }) => (
						<li key={id}>{content}</li>
					))}
				</ul>
			</div>
			<div>
				<h1>Selected filters names:</h1>
				<Button variant="primary" onClick={resetNamesOnClick}>
					<Value>Reset filters</Value>
				</Button>
				<ul>
					{selectedFiltersNames?.map(({ id, content }) => (
						<li key={id}>{content}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default App
