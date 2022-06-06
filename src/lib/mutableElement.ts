import { MaybeMutable, processMaybeMutable } from '@mutablejs/core';
import propProcessors from './propProcessors';
import { MutableElements, MutableElementProps } from './types';
import WithChildren, {
	VisibleChild,
} from './types/mutableElements/with/children';
import isChild from './utils/isChild';

export function mutableElement<Tag extends keyof MutableElements>(
	tag: Tag,
	props: MutableElementProps<
		MutableElements[Tag] & Partial<GlobalEventHandlers>
	> | null,
	...children: MutableElements[Tag] extends WithChildren
		? MaybeMutable<MutableElements[Tag]['children']>[]
		: never[]
) {
	const element = document.createElement(tag);

	const processors = propProcessors(element);

	props &&
		Object.entries(props).forEach(([propName, propValue]) => {
			if (element.hasAttribute(propName)) {
				return;
			}

			type PropValue = typeof propValue;

			// Handle special cases
			if (processors.hasOwnProperty(propName)) {
				if (propName === 'value') {
					processMaybeMutable(processors.value)(propValue);
				} else {
					processMaybeMutable((processors as any)[propName])(
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
					if (!value && value !== '' && value !== 0) {
						element.removeAttribute(propName);
					} else {
						element.setAttribute(propName, value);
					}
				})(propValue);
			}
		});

	const childOffset: number[] = [];

	children &&
		children.forEach((childData, index) => {
			processMaybeMutable((nodeData: typeof childData) => {
				let nodes: VisibleChild[] = [];

				let currentOffset = 0;
				for (let i = 0; i < index; i++) {
					currentOffset += childOffset[i];
				}

				if (Array.isArray(nodeData)) {
					nodes = nodeData.filter(isChild);
				} else if (isChild(nodeData)) {
					nodes = [nodeData];
				}

				for (let i = 0; i < childOffset[index]; i++) {
					const index = currentOffset;
					const child = element.childNodes[index];

					child instanceof Node && element.removeChild(child);
				}
				const insertBefore = element.childNodes[currentOffset];

				childOffset[index] = nodes.length;

				nodes.forEach((child) => {
					const node =
						typeof child === 'string' || typeof child === 'number'
							? document.createTextNode(`${child}`)
							: child;

					element.insertBefore(node, insertBefore);
				});
			})(childData);
		});

	return element;
}

export default mutableElement;
