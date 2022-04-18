import WithChildren from './with/children';

type SelectElement = Element & {
	autocomplete?: HTMLSelectElement['autocomplete'];
	autofocus?: HTMLSelectElement['autofocus'];
	disabled?: HTMLSelectElement['disabled'];
	form?: HTMLSelectElement['form'];
	multiple?: HTMLSelectElement['multiple'];
	name?: HTMLSelectElement['name'];
	required?: HTMLSelectElement['required'];
	size?: HTMLSelectElement['size'];
} & WithChildren;

export default SelectElement;
