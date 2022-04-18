import WithChildren from './with/children';

type OptionElement = Element & {
	disabled?: HTMLOptionElement['disabled'];
	label?: HTMLOptionElement['label'];
	selected?: HTMLOptionElement['selected'];
	value: HTMLOptionElement['value'];
} & WithChildren;

export default OptionElement;
