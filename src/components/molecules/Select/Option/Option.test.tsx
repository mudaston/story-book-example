import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import {
	optionComponentCannotBeEmpty,
	optionComponentShouldHaveIdentificatorProp,
	optionComponentShouldHaveTextValueComponentAsChildren,
} from '../../../../errors/molecules/Select/Option'

import Option from './Option'
import { TextValue } from '../../../atoms'

describe('Select -> Option component', () => {
	it('Render empty Option', () => {
		// @ts-expect-error Property 'children' is missing
		expect(() => render(<Option identificator={0}></Option>)).toThrowError(
			optionComponentCannotBeEmpty
		)
	})

	it('Render Option without identificator prop', () => {
		expect(() =>
			render(
				<Option>
					<TextValue>Hello world</TextValue>
				</Option>
			)
		).toThrowError(optionComponentShouldHaveIdentificatorProp)
	})

	it('Render Option without TextValue component', () => {
		expect(() =>
			render(<Option identificator={0}>Hello world</Option>)
		).toThrowError(optionComponentShouldHaveTextValueComponentAsChildren)
	})

	it('onClick should call function with id and text content', async () => {
		// prepare
		const textContent = 'Click me'

		const handleClick = jest.fn((id, content) => {
			callbackProperties.id = id
			callbackProperties.content = content
		})

		const callbackProperties: Partial<typeof expectToBeInProperties> = {}

		// expected value
		const expectToBeInProperties = {
			id: 0,
			content: textContent,
		}

		render(
			<Option identificator={0} onOptionClick={handleClick}>
				<TextValue>{textContent}</TextValue>
			</Option>
		)

		const clickElement = screen.getByText(textContent)

		fireEvent.click(clickElement)

		expect(handleClick).toHaveBeenCalledTimes(1)
		expect(callbackProperties).toStrictEqual(expectToBeInProperties)
	})
})
