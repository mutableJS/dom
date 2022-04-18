export type IfElse<A, B, Then, Else = never> = (<T>() => T extends A
	? 1
	: 2) extends <T>() => T extends B ? 1 : 2
	? Then
	: Else;
