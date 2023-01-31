import { TextValue } from '../../../../atoms'

const optionComponentCannotBeEmpty = 'Option component cannot be empty'

const optionComponentShouldHaveIdentificatorProp =
	'Option component should have identificator prop'

const optionComponentShouldHaveTextValueComponentAsChildren = `Option component should have ${TextValue.displayName} component as children`

export {
	optionComponentCannotBeEmpty,
	optionComponentShouldHaveIdentificatorProp,
	optionComponentShouldHaveTextValueComponentAsChildren,
}
