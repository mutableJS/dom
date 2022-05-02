import { Element } from '.';
import WithChildren from './with/children';

type TextareaElement = Element & {
	autocomplete?: 'on' | 'off';
	autofocus?: HTMLTextAreaElement['autofocus'];
	cols?: HTMLTextAreaElement['cols'];
	disabled?: HTMLTextAreaElement['disabled'];
	form?: HTMLTextAreaElement['form'];
	maxLength?: HTMLTextAreaElement['maxLength'];
	minLength?: HTMLTextAreaElement['minLength'];
	name?: HTMLTextAreaElement['name'];
	readOnly?: HTMLTextAreaElement['readOnly'];
	required?: HTMLTextAreaElement['required'];
	rows?: HTMLTextAreaElement['rows'];
	spellcheck?: HTMLTextAreaElement['spellcheck'] | 'default';
	wrap?: 'hard' | 'soft' | 'off';
} & WithChildren;

export default TextareaElement;
