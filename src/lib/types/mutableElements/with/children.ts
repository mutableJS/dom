export type VisibleChild = Node | string | number;
export type SkippableChild = null | undefined;

type WithChildren = {
	children?:
		| VisibleChild
		| SkippableChild
		| (VisibleChild | SkippableChild)[];
};

export default WithChildren;
