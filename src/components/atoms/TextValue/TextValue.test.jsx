import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import TextValue from './TextValue'
import Icon from '../Icon'

import {
	textComponentCanOnlyContainsText,
	textComponentCannotBeEmpty,
} from './utils/error'

describe('render TextValue component', () => {
	const text = 'Hello world'

	it('render with value', async () => {
		const component = <TextValue>{text}</TextValue>
		const { asFragment } = render(component)

		expect(screen.getByText(text)).toBeInTheDocument()
		expect(screen.getByText(text)).toHaveTextContent(text)

		expect(asFragment(component)).toMatchSnapshot()
	})

	it('render without value', async () => {
		expect(() => render(<TextValue></TextValue>)).toThrowError(
			textComponentCannotBeEmpty
		)
	})

	it('render with non-string value', async () => {
		expect(() =>
			render(
				<TextValue>
					<Icon />
				</TextValue>
			)
		).toThrowError(textComponentCanOnlyContainsText)
	})
})
