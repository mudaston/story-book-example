import React from 'react'
import { useSelector } from 'react-redux'

import useAppDispatch from './hooks/useAppDispatch'
import { resetFilter } from './redux/selectedFiltersSlice'
import getSelectedFiltersByElementName from './redux/selectors/selectedFilters'

// api
// import fetchPosts from './api/Posts/fetchPosts'
import { fetchUsers } from './api/Users'
import type { UsersArray } from './api/Users/fetchUsers'

import departments from './assets/departments.json'

import { Select, Option, Button } from './components/molecules'
import { TextValue } from './components/atoms'
import Icon from './components/atoms/Icon'

enum Filters {
	USERS = 'users',
	DEPARTMENTS = 'departments',
}

function App() {
	const [users, setUsers] = React.useState<UsersArray>([])
	const [dispatcherState, setDispatcherState] = React.useState({})

	const selectedFiltersDepartments = useSelector(
		getSelectedFiltersByElementName('departments')
	)
	const selectedFiltersNames = useSelector(
		getSelectedFiltersByElementName(Filters.USERS)
	)
	const dispatch = useAppDispatch()

	const resetFiltersOnClick = () => {
		dispatch(resetFilter('departments'))
	}

	const resetNamesOnClick = () => {
		dispatch(resetFilter(Filters.USERS))
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

	React.useEffect(() => {
		;(async () => {
			// fetchPosts().then((res) => console.log(res))
			const usersData = await fetchUsers({ page: 1, limit: 5 })

			setUsers(usersData)
		})()
	}, [])

	return (
		<div>
			<div
				style={{
					display: 'flex',
					gap: '10px',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '350px' }}>
					<Select label="Select an option" nameOfFilter="departments">
						{departments.map(({ id, name, icon }) => (
							<Option key={id} identificator={id}>
								<Icon>{icon}</Icon> <TextValue>{name}</TextValue>
							</Option>
						))}
					</Select>
				</div>
				<div style={{ width: '350px' }}>
					<Select label="Select user" nameOfFilter={Filters.USERS}>
						{users.map(({ id, username }) => (
							<Option key={id} identificator={id}>
								<TextValue>{username}</TextValue>
							</Option>
						))}
					</Select>
				</div>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
					<div
						style={{
							display: 'flex',
							gap: '20px',
							width: '350px',
							justifyContent: 'space-between',
						}}
					>
						<h1 style={{ margin: '0' }}>Selected filters department:</h1>
						<Button variant="primary" onClick={resetFiltersOnClick}>
							<TextValue>Reset filters</TextValue>
						</Button>
					</div>
					<ul style={{ margin: '0 0 0 15px', padding: '0' }}>
						{selectedFiltersDepartments?.map(({ id, content }) => (
							<li key={id}>{content}</li>
						))}
					</ul>
				</div>
				<div>
					<div
						style={{
							display: 'flex',
							gap: '20px',
							width: '350px',
							justifyContent: 'space-between',
						}}
					>
						<h1 style={{ margin: '0' }}>Selected filters users:</h1>
						<Button variant="primary" onClick={resetNamesOnClick}>
							<TextValue>Reset Users</TextValue>
						</Button>
					</div>
					<ul style={{ margin: '0 0 0 15px', padding: '0' }}>
						{selectedFiltersNames?.map(({ id, content }) => (
							<li key={id}>{content}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default App
