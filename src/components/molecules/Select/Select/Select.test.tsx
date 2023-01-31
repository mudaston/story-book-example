import React from 'react'
import { fireEvent, render as rtlRender, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as reduxHooks from 'react-redux'

import store from '../../../../redux/store'
import { defaultLabel } from './utils/default-values'
import { nameOfFilterPropShouldBeProvided } from './utils/error'

import Select from './Select'
import Option from '../Option'
import { TextValue } from '../../../atoms'

const render = (component: React.ReactNode) =>
	rtlRender(
		<reduxHooks.Provider store={store}>{component}</reduxHooks.Provider>
	)

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

	it('should add option value to reducer state by click on option', () => {
		jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([
			{
				id: 0,
				content: 'test',
			},
		])
	})
})
