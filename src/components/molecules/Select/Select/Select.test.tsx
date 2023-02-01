import React from 'react'
import { fireEvent, render as rtlRender, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as redux from 'react-redux'

import store from '../../../../redux/store'
import { defaultLabel } from './utils/default-values'
import { nameOfFilterPropShouldBeProvided } from './utils/error'

import Select from './Select'
import Option from '../Option'
import { TextValue } from '../../../atoms'

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
		const { getAllByText } = render(
			<Select nameOfFilter="test">
				<TextValue>Text</TextValue>
				<TextValue>Text</TextValue>
				<TextValue>Text</TextValue>
			</Select>
		)

		const checkIfListRendered = () => {
			expect(getAllByText(/Text/i).length).toBe(3)
		}

		const labelElement = document.getElementsByClassName('izi-select__label')[0]
		const listElement = document.getElementsByClassName(
			'izi-select__options-list'
		)[0]

		fireEvent.click(labelElement)

		checkIfListRendered()
	})
})
