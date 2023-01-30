import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'

import {
	optionComponentCannotBeEmpty,
	optionComponentShouldHaveIdentificatorProp,
	optionComponentShouldHaveTextValueComponentAsChildren,
} from '../../../../errors/molecules/Select/Option'

import ErrorBoundary from '../../../atoms/ErrorBoundary/ErrorBoundary'
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
		const callbackProperties: any = {}

		render(
			<Option
				identificator={0}
				onOptionClick={(id, content) => {
					callbackProperties.id = id
					callbackProperties.content = content
				}}
			>
				<TextValue>Text</TextValue>
			</Option>
		)

		const optionNode = screen.getByRole('listitem')

		// act(() => fireEvent.click(optionNode))

		// console.log(callbackProperties)
	})
})
