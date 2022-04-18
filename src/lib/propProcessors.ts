import { processMaybeMutable } from '@mutablejs/core';
import { MaybeMutableObject, WritableProps } from './types/utils';

type FilteredCSSKeys = Extract<WritableProps<CSSStyleDeclaration>, string>;
type CSSKeys = {
	[Prop in FilteredCSSKeys]: CSSStyleDeclaration[Prop] extends string | number
		? Prop
		: never;
}[FilteredCSSKeys];

function propProcessors<Tag extends keyof HTMLElementTagNameMap>(
	element: HTMLElementTagNameMap[Tag],
) {
	return {
		children(data: Node | Node[] | string | string[] | null | undefined) {
			if (data) {
				element.replaceChildren(
					...(Array.isArray(data) ? data : [data]),
				);
			} else {
				while (element.firstChild) {
					element.removeChild(element.firstChild);
				}
			}
		},
		value(data: string) {
			if (
				element instanceof HTMLInputElement ||
				element instanceof HTMLTextAreaElement ||
				element instanceof HTMLSelectElement
			) {
				element.value = data;
			}
		},
		style(
			data: MaybeMutableObject<Partial<Record<CSSKeys, string>>> | string,
		) {
			if (typeof data === 'string') {
				element.setAttribute('style', data);
			} else {
				Object.entries(data).forEach(([key, val]) => {
					processMaybeMutable((val: string | number | undefined) => {
						element.style[key as CSSKeys] = `${val}` || '';
					})(val);
				});
			}
		},
	};
}

export type Processors = ReturnType<typeof propProcessors>;
export type ProcessorTypes = {
	[Key in keyof Processors]: Parameters<Processors[Key]>[0];
};

export default propProcessors;
