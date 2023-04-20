import { OptelFromEntries } from './fromEntries';
import { OptelOmit } from './omit';
import { OptelPick, OptelUnknownKey } from './pick';
import { AssertAssignableTo, AssignAll, AssignableTo, DefinedAssignAll, KeyOf } from './types';
export declare function entries<const O extends object>(object: O): [string, unknown][];
export declare function assignDefined<T extends object, S extends readonly AssignableTo<T>[]>(target: T, ...sources: AssertAssignableTo<T, S>): asserts target is DefinedAssignAll<T, S>;
export declare function mergeDefined<const S extends readonly object[]>(...sources: AssertAssignableTo<{}, S>): DefinedAssignAll<{}, S>;
export declare function assign<T extends object, S extends readonly AssignableTo<T>[]>(target: T, ...sources: AssertAssignableTo<T, S>): asserts target is AssignAll<T, S>;
export declare function merge<const S extends readonly object[]>(...sources: AssertAssignableTo<{}, S>): AssignAll<{}, S>;
export declare function strictPick<T extends object, const K extends readonly (keyof T & string)[]>(object: T, ...keys: K): OptelPick<T, K>;
export declare function pick<T extends object, const K extends readonly string[]>(object: T, ...keys: K): OptelPick<T, K>;
export declare function strictOmit<T extends object, const K extends readonly string[]>(object: T, ...keys: K): OptelOmit<T, K>;
export declare function omit<T extends object, const K extends readonly string[]>(object: T, ...keys: K): OptelOmit<T, K>;
export declare function keyOf<T extends object, const V>(object: T, value: V): KeyOf<T, V> | OptelUnknownKey | ([KeyOf<T, V>] extends [never] ? undefined : KeyOf<T, V>);
export declare function allKeysOf<T extends object, const V>(object: T, value: V): (OptelUnknownKey | ([KeyOf<T, V>] extends [never] ? never : KeyOf<T, V>))[];
export declare function unlock<const O>(object: O): O & {
    [P: PropertyKey]: unknown;
};
export declare function fromEntries<const T extends readonly (readonly [any, any])[]>(...entries: T): OptelFromEntries<T>;
