import { ReactNode } from 'react'
import { Button, Value, Icon } from './index'

import Image from '../../assets/Image'

export default {
	title: 'Controls/Button/Button',
	component: Button,
	parameters: {
		docs: {
			description: {
				component:
					'Компонент кнопка. Помимо собственных свойств так же принимает свойства обычной кнопки',
			},
		},
	},
	argTypes: {
		onClick: {
			type: Function,
			description:
				'Компонент принимает в себя все те же параметры что и обычная кнопка, что позволяет нам передавать обработчики событий',
		},
		disabled: {
			type: 'boolean',
			description: 'Включить/Выключить кнопку',
		},
		variant: {
			description: 'Вариант внешнего вида кнопки',
		},
		children: {
			type: ReactNode,
			description: 'Элементы внутри кнопки',
			defaultValue: <Value>Some text</Value>,
			options: [0, 1, 2],
			mapping: [
				<Value>Some text</Value>,
				<Icon>
					<Image />
				</Icon>,
				<>
					<Value>Some text</Value>
					<Icon>
						<Image />
					</Icon>
				</>,
			],
			control: {
				type: 'radio',
				labels: {
					0: 'Обычный текст',
					1: 'Иконка/Картинка',
					2: 'Текст с картинкой',
				},
			},
		},
	},
}

const Template = (arg) => <Button {...arg} />

export const Default = Template.bind({})
Default.args = {
	children: <Value>Some value</Value>,
}
