import { MaybeMutable } from '@mutablejs/core';

export type MaybeMutableObject<Obj> = {
	[Key in keyof Obj]: MaybeMutable<Obj[Key]>;
};
