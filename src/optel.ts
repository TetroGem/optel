import { AssertAssignableTo, AssignAll, AssignableTo, KeyOf, OptelPick } from './types';

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

export function pick<T extends object, const K extends readonly (keyof T & string)[]>(
    object: T,
    ...keys: K
): OptelPick<T, K> {
    type Key = K[number];
    const res: Partial<Pick<T, Key>> = {};
    for(const key of keys) {
        res[key as Extract<keyof T, Key>] = object[key as keyof T] as any;
    }
    return res as OptelPick<T, K>
}

export function omit<T extends object, const K extends keyof T & string>(object: T, ...keys: readonly K[]): Omit<T, K> {
    const res: Partial<Omit<T, K>> = {};
    for(const key of Object.keys(object)) {
        if(keys.indexOf(key as K) === -1) res[key as Exclude<keyof T, K>] = object[key as keyof T] as any;
    }
    return res as Omit<T, K>
}

export function keyOf<T extends object, const V>(
    object: T,
    value: V,
): [KeyOf<T, V>] extends [never] ? undefined : KeyOf<T, V> {
    for(const [key, keyValue] of Object.entries(object)) {
        if(value === keyValue) return key as any;
    }
    return undefined as any;
}
