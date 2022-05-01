import { MutableElements, MutableElementProps } from '.';

declare global {
	namespace JSX {
		type IntrinsicElements = {
			[Key in keyof MutableElements]: MutableElementProps<
				MutableElements[Key] & Partial<GlobalEventHandlers>
			>;
		};
	}
}
