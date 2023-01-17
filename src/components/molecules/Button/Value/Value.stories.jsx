import { Value } from '../index'

export default {
	title: 'Controls/Button/Value',
	component: Value,
	parameters: {
		docs: {
			description: {
				component:
					'Часть компонента кнопки. Данный компонент(atom) нужен для отображения и стилизации текста в кнопке',
			},
		},
	},
}

const Template = (arg) => <Value {...arg} />

export const Default = Template.bind({})
Default.args = {
	children: 'Some value',
}
