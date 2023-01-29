import { getByRole, getByText, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from './Button'
import { TextValue } from '../../atoms'
import Icon from '../../atoms/Icon'

describe('render Button component', () => {
	const textContent = 'Hello world'
	const iconText = '💖'

	it('render with text value', () => {
		const { getByText } = render(
			<Button>
				<TextValue>{textContent}</TextValue>
			</Button>
		)

		const button = document.getElementsByClassName('button default')[0]

		expect(button).toBeInTheDocument()
		expect(getByText(textContent)).toBeInTheDocument()
	})

	it('render with icon and text value', () => {
		const { getByText } = render(
			<Button>
				<Icon>{iconText}</Icon>
				<TextValue>{textContent}</TextValue>
			</Button>
		)

		const button = document.getElementsByClassName('button default')[0]
		const icon = document.getElementsByClassName('izi-icon')[0]

		expect(button).toBeInTheDocument()
		expect(icon).toBeInTheDocument()
		expect(getByText(iconText)).toBeInTheDocument()
		expect(getByText(textContent)).toBeInTheDocument()
	})

	it('render with primary variant', () => {
		render(
			<Button variant="primary">
				<TextValue>{textContent}</TextValue>
			</Button>
		)

		const button = document.getElementsByClassName('button primary')[0]

		expect(button).toBeInTheDocument()
	})

	it('render with secondary variant', () => {
		render(
			<Button variant="secondary">
				<TextValue>{textContent}</TextValue>
			</Button>
		)

		const button = document.getElementsByClassName('button secondary')[0]

		expect(button).toBeInTheDocument()
	})
})
