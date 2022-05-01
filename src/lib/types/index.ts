import { MaybeMutable } from '@mutablejs/core';
import { MutableElements as MutableElementsType } from './mutableElements';
import './jsx';

export type MutableElements = MutableElementsType;

export type MutableElementProps<Obj> = {
	[Key in keyof Obj]: MaybeMutable<Obj[Key]>;
};
