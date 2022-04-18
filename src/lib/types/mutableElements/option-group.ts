import WithChildren from './with/children';

type OptionGroupElement = Element & {
	disabled?: HTMLOptionElement['disabled'];
	label: HTMLOptionElement['label'];
} & WithChildren;

export default OptionGroupElement;
