import IfElse from './if-else';

export type WritableProps<Obj> = {
	[Prop in keyof Obj]: IfElse<
		{
			[K in Prop]: Obj[Prop];
		},
		{ -readonly [K in Prop]: Obj[Prop] },
		Prop
	>;
}[keyof Obj];

export default WritableProps;
