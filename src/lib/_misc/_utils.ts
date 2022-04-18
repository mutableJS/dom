export type EventHandlers<Input extends Element> = Pick<
	Input,
	{
		[K in keyof Input]: K extends `on${infer A}`
			? keyof Input & `on${A}`
			: never;
	}[keyof Input]
>;

export type ExtractMap<
	Obj extends Record<string, readonly string[]>,
	Key extends Exclude<keyof Obj, '*'> = never,
> = Obj['*'][keyof Obj['*']] &
	(Obj[Key] extends never ? '' : Obj[Key][keyof Obj[Key]]);

export type ExtractString<
	Obj extends Record<string, readonly string[]>,
	Key extends keyof Obj,
> = Obj[Key][keyof Obj[Key]];

export type HTMLElementsMap = Record<
	'*' | keyof HTMLElementTagNameMap,
	readonly string[]
>;

export type IfThen<A, B, Then, Else = never> = (<T>() => T extends A
	? 1
	: 2) extends <T>() => T extends B ? 1 : 2
	? Then
	: Else;

export type WritableProps<Obj> = {
	[Prop in keyof Obj]: IfThen<
		{
			[K in Prop]: Obj[Prop];
		},
		{ -readonly [K in Prop]: Obj[Prop] },
		Prop
	>;
}[keyof Obj];

export type FunctionProps<Obj> = {
	[Prop in keyof Obj]: Obj[Prop] extends Function ? Prop : never;
}[keyof Obj];

export type EventProps<Obj> = {
	[K in keyof Obj]: K extends `on${infer A}` ? keyof Obj & `on${A}` : never;
}[keyof Obj];
