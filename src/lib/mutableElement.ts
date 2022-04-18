import { MaybeMutable, processMaybeMutable } from '@mutablejs/core';
import propProcessors, { Processors } from './propProcessors';
import { MutableElements, MutableElementProps } from './types';
import WithChildren from './types/mutableElements/with/children';

const childless = Symbol('childless');

function mutableElement<Tag extends keyof MutableElements>(
	tag: Tag,
	props: MutableElementProps<
		MutableElements[Tag] & Partial<GlobalEventHandlers>
	>,
	children: MutableElements[Tag] extends WithChildren
		? MaybeMutable<MutableElements[Tag]['children']> | typeof childless
		: typeof childless = childless,
) {
	const element = document.createElement(tag);

	const processors = propProcessors(element);

	Object.entries(props).forEach(([propName, propValue]) => {
		type PropValue = typeof propValue;

		// Handle special cases
		if (processors.hasOwnProperty(propName)) {
			if (propName === 'value') {
				processMaybeMutable(processors.value)(propValue);
			} else {
				processMaybeMutable(processors[propName as keyof Processors])(
					propValue,
				);
			}
		}

		// Handle events
		else if (propName.startsWith('on')) {
			processMaybeMutable((action: PropValue) => {
				element[propName as keyof typeof element] = action;
			})(propValue);
		}

		// Set everything else as attributes
		else {
			processMaybeMutable((value: PropValue) => {
				element.setAttribute(propName, value);
			})(propValue);
		}
	});

	if (children !== childless) {
		processMaybeMutable(processors.children)(children);
	}

	return element;
}

export default mutableElement;
