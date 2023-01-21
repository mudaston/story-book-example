import { ReactNode } from 'react'

import Input from './Input'

export default {
	title: 'Molecules/Input',
	component: Input,
	parameters: {
		docs: {
			description: {
				component: 'Компонент инпут.',
			},
		},
	},
	argTypes: {
		initialValue: {
			type: 'string',
			description: 'Начальное значение инпута',
			defaultValue: 'default value',
		},
		children: {
			type: ReactNode,
			description: 'Разные view для компонента',
			defaultValue: <Input.InputView />,
			options: [0, 1],
			mapping: [<Input.InputView />, <Input.AnotherView />],
			control: {
				type: 'radio',
				labels: {
					0: 'First type',
					1: 'Second type',
				},
			},
		},
	},
}

const Template = (arg) => <Input {...arg} />

export const Common = Template.bind({})
Common.args = {
	initialValue: 'initial value',
}
