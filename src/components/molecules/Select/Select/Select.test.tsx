import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as redux from 'react-redux'

import store from '../../../../redux/store'
import { defaultLabel } from './utils/default-values'
import { nameOfFilterPropShouldBeProvided } from './utils/error'

import Select from './Select'
import Option from '../Option'
import { TextValue } from '../../../atoms'

describe('<Select /> tests', () => {
	it('<Select /> renders', () => {
		render(
			<redux.Provider store={store}>
				<Select nameOfFilter="test"></Select>
			</redux.Provider>
		)

		const selectNode = document.getElementsByClassName('izi-select')[0]

		expect(selectNode).toBeInTheDocument()
	})

	it('<Select /> render without label provided', () => {
		render(
			<redux.Provider store={store}>
				<Select nameOfFilter="test"></Select>
			</redux.Provider>
		)

		const labelElement = document.getElementsByClassName('izi-select__label')[0]
		const labelText = labelElement.textContent

		expect(labelText).toBe(defaultLabel)
	})

	it('<Select /> render without "nameOfFilter" props', () => {
		expect(() =>
			render(
				<redux.Provider store={store}>
					{/* @ts-expect-error Property 'nameOfFilter' is missing */}
					<Select></Select>
				</redux.Provider>
			)
		).toThrowError(nameOfFilterPropShouldBeProvided)
	})

	it('<Select /> render list on click on label', () => {
		render(
			<redux.Provider store={store}>
				<Select nameOfFilter="test">
					<TextValue>One</TextValue>
					<TextValue>Two</TextValue>
					<TextValue>Three</TextValue>
				</Select>
			</redux.Provider>
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

	it('<Select /> on click should add option to store state', () => {
		render(
			<redux.Provider store={store}>
				<Select nameOfFilter="test">
					<TextValue>One</TextValue>
					<TextValue>Two</TextValue>
					<TextValue>Three</TextValue>
				</Select>
			</redux.Provider>
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
})
