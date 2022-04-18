import { ProcessorTypes } from '../../propProcessors';
import FormElement from './form';
import { Element } from './index';
import WithChildren from './with/children';

type ButtonElement = Element & {
	autofocus?: HTMLButtonElement['autofocus'];
	disabled?: HTMLButtonElement['disabled'];
	form?: HTMLButtonElement['form'];
	formAction?: HTMLButtonElement['formAction'];
	formEnctype?: FormElement['enctype'];
	formMethod?: FormElement['method'];
	formNoValidate?: FormElement['noValidate'];
	formTarget?: FormElement['target'];
	name?: HTMLButtonElement['name'];
	type?: 'submit' | 'reset' | 'button';
	value?: ProcessorTypes['value'];
} & WithChildren;

export default ButtonElement;
