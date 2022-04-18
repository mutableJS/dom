import { Element } from './index';
import WithChildren from './with/children';
import WithTarget from './with/target';

type FormElement = Element & {
	acceptCharset?: HTMLFormElement['acceptCharset'];
	autocomplete?: 'off' | 'on';
	name?: HTMLFormElement['name'];
	rel?: HTMLFormElement['rel'];
} & ({
		enctype?:
			| 'application/x-www-form-urlencoded'
			| 'multipart/form-data'
			| 'text/plain';
		noValidate?: HTMLFormElement['noValidate'];
	} & WithTarget &
		(
			| {
					method?: 'post' | 'get';
					action?: string;
			  }
			| {
					method?: 'dialog';
					action?: never;
			  }
		)) &
	WithChildren;

export default FormElement;
