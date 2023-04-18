import { AssignAll, AssertAssignableTo, AssignableTo } from './types';
export declare function assign<T extends object, S extends readonly AssignableTo<T>[]>(target: T, ...sources: AssertAssignableTo<T, S>): asserts target is AssignAll<T, S>;
export declare function merge<const S extends readonly object[]>(...sources: AssertAssignableTo<{}, S>): AssignAll<{}, S>;
