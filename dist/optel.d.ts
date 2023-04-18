import { AssertAssignableTo, AssignAll, AssignableTo, KeyOf } from './types';
export declare function assign<T extends object, S extends readonly AssignableTo<T>[]>(target: T, ...sources: AssertAssignableTo<T, S>): asserts target is AssignAll<T, S>;
export declare function merge<const S extends readonly object[]>(...sources: AssertAssignableTo<{}, S>): AssignAll<{}, S>;
export declare function pick<T extends object, const K extends keyof T & string>(object: T, ...keys: readonly K[]): Pick<T, K>;
export declare function omit<T extends object, const K extends keyof T & string>(object: T, ...keys: readonly K[]): Omit<T, K>;
export declare function keyOf<T extends object, const V>(object: T, value: V): [KeyOf<T, V>] extends [never] ? undefined : KeyOf<T, V>;
