import { ReactNode } from 'react'

import Select from './Select/Select'
import Option from './Option'

import Icon from '../../atoms/Icon'

export default {
	title: 'Molecules/Select',
	component: Select,
	parameters: {
		docs: {
			description: {
				component:
					'Компонент кнопка. Помимо собственных свойств так же принимает свойства обычной кнопки',
			},
		},
	},
	argTypes: {
		disabled: {
			type: 'boolean',
			description: 'Включить/Выключить кнопку',
		},
		children: {
			type: ReactNode,
			description: 'Элементы внутри кнопки',
			defaultValue: (
				<>
					<Option>Some text</Option>
					<Option>Some text</Option>
				</>
			),
			options: [0, 1],
			mapping: [
				<>
					<Option>Some text</Option>
					<Option>Some text</Option>
					<Option>Some text</Option>
					<Option>Some text</Option>
					<Option>Some text</Option>
				</>,
				<>
					<Option>
						<Icon>☕</Icon>
						Some text
					</Option>
					<Option>
						<Icon>🔥</Icon>
						Some text
					</Option>
					<Option>
						<Icon>🌭</Icon>
						Some text
					</Option>
				</>,
			],
			control: {
				type: 'radio',
				labels: {
					0: 'Много пунктов',
					1: 'Много пунктов с иконками',
				},
			},
		},
	},
}

const Template = (arg) => (
	<div style={{ maxWidth: 200 }}>
		<Select label="Select an option" {...arg} />
	</div>
)

export const Common = Template.bind({})
Common.args = {}
