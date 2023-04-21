import { OptelFromEntries } from './fromEntries';
import { OptelOmit } from './omit';
import { OptelPick, OptelUnknownKey } from './pick';
import { AssertAssignableTo, AssertDefinedAssignableTo, AssignAll, AssignableTo, DefinedAssignAll, DefinedValuesOnly, KeyOf } from './types';

export function entries<const O extends object>(object: O): [string, unknown][] {
    return Object.entries(object);
}

function removeUndefinedValues<O extends object>(object: O): DefinedValuesOnly<O> {
    return Object.fromEntries(entries(object).filter(([_, value]) => value !== undefined)) as any;
}

export function assignDefined<T extends object, S extends readonly AssignableTo<T>[]>(
    target: T,
    ...sources: AssertDefinedAssignableTo<T, S>
): asserts target is DefinedAssignAll<T, S> {
    return Object.assign(target, ...sources.map(source => removeUndefinedValues(source as object)));
}

export function mergeDefined<const S extends readonly object[]>(
    ...sources: AssertDefinedAssignableTo<{}, S>
): DefinedAssignAll<{}, S> {
    return Object.assign({}, ...sources.map(source => removeUndefinedValues(source as object)));
}

export function assign<T extends object, S extends readonly AssignableTo<T>[]>(
    target: T,
    ...sources: AssertAssignableTo<T, S>
): asserts target is AssignAll<T, S> {
    return Object.assign(target, ...sources);
}

export function merge<const S extends readonly object[]>(
    ...sources: AssertAssignableTo<{}, S>
): AssignAll<{}, S> {
    return Object.assign({}, ...sources);
}

export function strictPick<T extends object, const K extends readonly (keyof T & string)[]>(
    object: T,
    ...keys: K
): OptelPick<T, K> {
    return pick<T, K>(object, ...keys);
}

export function pick<
    T extends object,
    const K extends readonly string[],
>(
    object: T,
    ...keys: K
): OptelPick<T, K> {
    type Key = K[number];
    const res: Partial<OptelPick<T, K>> = {};
    for(const key of keys) {
        // @ts-ignore - idk why it is erroring here types look fine
        res[key as Extract<keyof T, Key>] = object[key as keyof T] as any;
    }
    return res as any;
}

export function strictOmit<T extends object, const K extends readonly string[]>(
    object: T,
    ...keys: K
): OptelOmit<T, K> {
    return omit<T, K>(object, ...keys);
}

export function omit<T extends object, const K extends readonly string[]>(
    object: T,
    ...keys: K
): OptelOmit<T, K> {
    type Key = K[number];
    const res: Partial<OptelOmit<T, K>> = {};
    for(const key of Object.keys(object)) {
        if(keys.indexOf(key as Key) === -1) res[key as keyof OptelOmit<T, K>] = object[key as keyof T] as any;
    }
    return res as OptelOmit<T, K>;
}

// old inaccurate return type: [KeyOf<T, V>] extends [never] ? undefined : KeyOf<T, V>
// an extra property could be added with the same value, in which case it's possible that could be returned
export function keyOf<T extends object, const V>(
    object: T,
    value: V,
): KeyOf<T, V> | OptelUnknownKey | ([KeyOf<T, V>] extends [never] ? undefined : KeyOf<T, V>) {
    for(const [key, keyValue] of Object.entries(object)) {
        if(value === keyValue) return key as any;
    }
    return undefined as any;
}

export function allKeysOf<T extends object, const V>(
    object: T,
    value: V,
): (OptelUnknownKey | ([KeyOf<T, V>] extends [never] ? never : KeyOf<T, V>))[] {
    const allKeys: string[] = [];
    for(const [key, keyValue] of Object.entries(object)) {
        if(value === keyValue) allKeys.push(key);
    }
    return allKeys as any;
}

// export function isKey<const K extends string>(key: string, ...options: K[]): key is K {
//     return options.includes(key as K);
// }

export function unlock<const O>(object: O): O & { [P: PropertyKey]: unknown } {
    return object as any;
}

export function fromEntries<const T extends readonly (readonly [any, any])[]>(...entries: T): OptelFromEntries<T> {
    return Object.fromEntries(entries);
}
