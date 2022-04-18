import { ProcessorTypes } from '../../propProcessors';
import { Element } from './index';

type InputElement = Element & {
	autoComplete?: HTMLInputElement['autocomplete'];
	autoFocus?: HTMLInputElement['autofocus'];
	autofocus?: HTMLInputElement['autofocus'];
	disabled?: HTMLInputElement['disabled'];
	form?: HTMLInputElement['form'];
	list?: HTMLInputElement['list'];
	name?: HTMLInputElement['name'];
	readOnly?: HTMLInputElement['readOnly'];
	required?: HTMLInputElement['required'];
	value: ProcessorTypes['value'];
} & (
		| {
				type:
					| 'button'
					| 'color'
					| 'date'
					| 'datetime-local'
					| 'hidden'
					| 'month'
					| 'range'
					| 'reset'
					| 'time'
					| 'week';
				accept?: never;
				alt?: never;
				capture?: never;
				checked?: never;
				dirName?: never;
				formAction?: never;
				formEnctype?: never;
				formMethod?: never;
				formNoValidate?: never;
				formTarget?: never;
				height?: never;
				max?: never;
				min?: never;
				src?: never;
				size?: never;
				step?: never;
				width?: never;
		  }
		| ((
				| {
						type: 'file';
						accept?: HTMLInputElement['accept'];
						capture?: HTMLInputElement['capture'];
						size?: never;
				  }
				| {
						type: 'email';
						accept?: never;
						capture?: never;
						size?: HTMLInputElement['size'];
				  }
		  ) & {
				alt?: never;
				checked?: never;
				dirName?: never;
				formAction?: never;
				formEnctype?: never;
				formMethod?: never;
				formNoValidate?: never;
				formTarget?: never;
				height?: never;
				max?: never;
				min?: never;
				multiple?: HTMLInputElement['multiple'];
				src?: never;
				step?: never;
				width?: never;
		  })
		| ((
				| {
						type: 'image';
						alt?: HTMLInputElement['alt'];
						height?: HTMLInputElement['height'];
						src?: HTMLInputElement['src'];
						width?: HTMLInputElement['width'];
				  }
				| {
						type: 'submit';
						alt?: never;
						height?: never;
						src?: never;
						width?: never;
				  }
		  ) & {
				accept?: never;
				capture?: never;
				checked?: never;
				dirName?: never;
				formAction?: HTMLInputElement['formAction'];
				formEnctype?: HTMLInputElement['formEnctype'];
				formMethod?: HTMLInputElement['formMethod'];
				formNoValidate?: HTMLInputElement['formNoValidate'];
				formTarget?: HTMLInputElement['formTarget'];
				max?: never;
				min?: never;
				size?: never;
				step?: never;
		  })
		| {
				type: 'checkbox' | 'radio';
				accept?: never;
				alt?: never;
				capture?: never;
				checked?: HTMLInputElement['checked'];
				dirName?: never;
				formAction?: never;
				formEnctype?: never;
				formMethod?: never;
				formNoValidate?: never;
				formTarget?: never;
				height?: never;
				max?: never;
				min?: never;
				src?: never;
				size?: never;
				step?: never;
				width?: never;
		  }
		| ((
				| ((
						| {
								type: 'text';
								size?: HTMLInputElement['size'];
						  }
						| {
								type: 'search';
								size?: never;
						  }
				  ) & {
						dirName?: HTMLInputElement['dirName'];
				  })
				| {
						type: 'password' | 'tel' | 'url';
						dirName?: never;
						size?: HTMLInputElement['size'];
				  }
		  ) & {
				accept?: never;
				alt?: never;
				capture?: never;
				checked?: never;
				formAction?: never;
				formEnctype?: never;
				formMethod?: never;
				formNoValidate?: never;
				formTarget?: never;
				height?: never;
				max?: never;
				min?: never;
				maxLength?: HTMLInputElement['maxLength'];
				minLength?: HTMLInputElement['minLength'];
				src?: never;
				step?: never;
				width?: never;
		  })
		| {
				type: 'number';
				accept?: never;
				alt?: never;
				capture?: never;
				checked?: never;
				dirName?: never;
				formAction?: never;
				formEnctype?: never;
				formMethod?: never;
				formNoValidate?: never;
				formTarget?: never;
				height?: never;
				max?: number;
				min?: number;
				src?: never;
				step: number;
				size?: never;
				width?: never;
		  }
	);

export default InputElement;
