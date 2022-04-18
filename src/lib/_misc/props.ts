import { MaybeMutable } from '@mutablejs/core';
import propProcessors from '../propProcessors';
import { WritableProps } from './_utils';

type Processors = ReturnType<typeof propProcessors>;
type ProcessorTypes = {
	[Key in keyof Processors]?: MaybeMutable<Parameters<Processors[Key]>[0]>;
};

type FunctionProps<Tag extends keyof HTMLElementTagNameMap> = {
	[Prop in keyof HTMLElementTagNameMap[Tag]]: HTMLElementTagNameMap[Tag][Prop] extends Function
		? Prop
		: never;
}[keyof HTMLElementTagNameMap[Tag]];

type EventProps<Tag extends keyof HTMLElementTagNameMap> = {
	[K in keyof HTMLElementTagNameMap[Tag]]: K extends `on${infer A}`
		? keyof HTMLElementTagNameMap[Tag] & `on${A}`
		: never;
}[keyof HTMLElementTagNameMap[Tag]];

type _WritableProps<Tag extends keyof HTMLElementTagNameMap> = Exclude<
	WritableProps<HTMLElementTagNameMap[Tag]>,
	Exclude<FunctionProps<Tag>, EventProps<Tag>>
>;

type HTMLElementProps = {
	[Tag in keyof HTMLElementTagNameMap]: {
		[Prop in _WritableProps<Tag>]?: MaybeMutable<
			HTMLElementTagNameMap[Tag][Prop]
		>;
	} & ProcessorTypes;
};

export default HTMLElementProps;
