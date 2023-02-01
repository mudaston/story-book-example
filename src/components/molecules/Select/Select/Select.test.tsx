import React from 'react'
import { fireEvent, render as rtlRender, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as redux from 'react-redux'

import store from '../../../../redux/store'
import useAppDispatch from '../../../../hooks/useAppDispatch'
import { defaultLabel } from './utils/default-values'
import { nameOfFilterPropShouldBeProvided } from './utils/error'

import Select from './Select'
import Option from '../Option'
import { TextValue } from '../../../atoms'

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useAppDispatch: () => jest.fn(),
	useSelector: () => jest.fn(),
}))
// jest.mock('../../../../redux/selectors/selectedFilters')
// jest.mock('../../../../hooks/useAppDispatch')

const mockedUseSelector = jest.spyOn(redux, 'useSelector')
const mockedUseDispatch = jest.spyOn(redux, 'useDispatch')

const render = (component: React.ReactNode) =>
	rtlRender(<redux.Provider store={store}>{component}</redux.Provider>)

describe('<Select /> tests', () => {
	it('should render', () => {
		render(<Select nameOfFilter="test"></Select>)

		const selectNode = document.getElementsByClassName('izi-select')[0]

		expect(selectNode).toBeInTheDocument()
	})

	it('should render with default label when label not provided', () => {
		render(<Select nameOfFilter="test"></Select>)

		const labelElement = document.getElementsByClassName('izi-select__label')[0]
		const labelText = labelElement.textContent

		expect(labelText).toBe(defaultLabel)
	})

	it('should throw error without "nameOfFilter" props', () => {
		expect(() =>
			render(
				/* @ts-expect-error Property 'nameOfFilter' is missing */
				<Select></Select>
			)
		).toThrowError(nameOfFilterPropShouldBeProvided)
	})

	it('should render list by click on label', () => {
		render(
			<Select nameOfFilter="test">
				<TextValue>One</TextValue>
				<TextValue>Two</TextValue>
				<TextValue>Three</TextValue>
			</Select>
		)

		const checkIfListRendered = () => {
			expect(textValueElements.length).toBe(3)
		}

		const labelElement = document.getElementsByClassName('izi-select__label')[0]
		const listElement = document.getElementsByClassName(
			'izi-select__options-list'
		)[0]

		fireEvent.click(labelElement)

		const textValueElements = listElement.getElementsByTagName('span')

		checkIfListRendered()
	})

	/* it('should add option value to reducer state by click on option', () => {
		const dispatch = jest.fn(() => useAppDispatch())
		// @ts-expect-error
		mockedUseDispatch.mockResolvedValue(dispatch)

		render(
			<Select nameOfFilter="test">
				<Option identificator={0}>
					<TextValue>One</TextValue>
				</Option>
				<Option identificator={1}>
					<TextValue>Two</TextValue>
				</Option>
				<Option identificator={2}>
					<TextValue>Three</TextValue>
				</Option>
			</Select>
		)

		const labelNode = screen.getByText(defaultLabel)

		fireEvent.click(labelNode)

		const optionNodes = document.getElementsByClassName('izi-select__option')

		fireEvent.click(optionNodes[0])

		screen.debug(optionNodes[0])

		expect(dispatch).toHaveBeenCalledTimes(1)
	}) */
})
