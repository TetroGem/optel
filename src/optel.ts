import { OptelPick, OptelStringExclude, OptelUnknownKeyFor, OptelUnknownKeyOr } from './pick';
import { AssertAssignableTo, DefinedAssignAll, AssignableTo, KeyOf, OptelOmit, AssignAll, Prettify, AssertString } from './types';

export function assignDefined<T extends object, S extends readonly AssignableTo<T>[]>(
    target: T,
    ...sources: AssertAssignableTo<T, S>
): asserts target is DefinedAssignAll<T, S> {
    return Object.assign(target, ...sources); // FIXME
}

export function mergeDefined<const S extends readonly object[]>(
    ...sources: AssertAssignableTo<{}, S>
): DefinedAssignAll<{}, S> {
    return Object.assign({}, ...sources); // FIXME
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
    type Key = K[number];
    const res: Partial<OptelPick<T, K>> = {};
    for(const key of keys) {
        // @ts-ignore - idk why it is erroring here types look fine
        res[key as Extract<keyof T, Key>] = object[key as keyof T] as any;
    }
    return res as OptelPick<T, K>;
}

export function pick<
    T extends object,
    const K extends readonly (string | OptelStringExclude<string>)[],
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

export function omit<T extends object, const K extends readonly (keyof T & string)[]>(
    object: T,
    ...keys: K
): OptelOmit<T, K> {
    type Key = K[number];
    const res: Partial<OptelOmit<T, K>> = {};
    for(const key of Object.keys(object)) {
        if(keys.indexOf(key as Key) === -1) res[key as Exclude<keyof T, Key>] = object[key as keyof T] as any;
    }
    return res as OptelOmit<T, K>;
}

// old inaccurate return type: [KeyOf<T, V>] extends [never] ? undefined : KeyOf<T, V>
// an extra property could be added with the same value, in which case it's possible that could be returned
export function keyOf<T extends object, const V>(
    object: T,
    value: V,
): OptelUnknownKeyFor<V> | ([KeyOf<T, V>] extends [never] ? undefined : KeyOf<T, V>) {
    for(const [key, keyValue] of Object.entries(object)) {
        if(value === keyValue) return key as any;
    }
    return undefined as any;
}

export function allKeysOf<T extends object, const V>(
    object: T,
    value: V,
): string[] {
    const allKeys: string[] = [];
    for(const [key, keyValue] of Object.entries(object)) {
        if(value === keyValue) allKeys.push(key);
    }
    return allKeys;
}

const a = {
    foo: 1,
    bar: 2,
    qux: 'hello',
    baz: false,
};

const numberKey = keyOf(a, 3 as number);
const threeKey = keyOf(a, 3);
if(numberKey !== undefined) {
    const spicked = strictPick(a, numberKey);
    spicked.bar;
    const picked = pick(a, numberKey);
    picked.foo;
    picked[numberKey] = 4;
    const b = picked[threeKey];
    picked['hi'];
    const c = picked['hi']
}
