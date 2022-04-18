import { MaybeMutable } from '@mutablejs/core';
export * from './mutableElements';
export * from './utils';

export type MutableElementProps<Obj> = {
	[Key in keyof Obj]: MaybeMutable<Obj[Key]>;
};
