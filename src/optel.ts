import { OptelFromEntries } from './fromEntries';
import { OptelOmit } from './omit';
import { OptelPick } from './pick';
import { AssertAssignableTo, AssertDefinedAssignableTo, AssignAll, AssignableTo, DefinedAssignAll, DefinedValuesOnly, OptelKeyOf, OptelUnlocked } from './types';

/**
 * This function is a wrapper for Object.entries(), providing additional type information and no extra implementation
 * @param object The object to get the entries of
 * @returns An array of tuples representing all the entries of the given object
 */
export function entries<const O extends object>(object: O): [key: string, value: unknown][] {
    return Object.entries(object);
}

function removeUndefinedValues<O extends object>(object: O): DefinedValuesOnly<O> {
    return Object.fromEntries(entries(object).filter(([_, value]) => value !== undefined)) as any;
}

/**
 * Assigns all keys of source objects that do not have their value set to undefined to the target object
 * It does not return the target object, but instead asserts its type. To create a new object, use `optel.mergeDefined()`.
 * @param target The object to assign to
 * @param sources The objects to get assigned values from
 */
export function assignDefined<T extends object, S extends readonly AssignableTo<T>[]>(
    target: T,
    ...sources: AssertDefinedAssignableTo<T, S>
): asserts target is DefinedAssignAll<T, S> {
    return Object.assign(target, ...sources.map(source => removeUndefinedValues(source as object)));
}

/**
 * Creates a new object with all of its keys assigned to their respective values from the source objects, only being
 * assigned if that value is not undefined.
 * This function creates a new object and returns it, not modifying any of the source objects.
 * To modify an existing target object instead, use `optel.assignDefined()`.
 * @param sources The objects to get assigned values from
 * @returns The newly created merged object
 */
export function mergeDefined<const S extends readonly object[]>(
    ...sources: AssertDefinedAssignableTo<{}, S>
): DefinedAssignAll<{}, S> {
    return Object.assign({}, ...sources.map(source => removeUndefinedValues(source as object)));
}

/**
 * This function is a wrapper for Object.assign(), providing additional type information and no extra implementation.
 * It does not return the target object, but instead asserts its type. To create a new object, use `optel.merge()`.
 * @param target The object to assign to
 * @param sources The objects to get assigned values from
 */
export function assign<T extends object, S extends readonly AssignableTo<T>[]>(
    target: T,
    ...sources: AssertAssignableTo<T, S>
): asserts target is AssignAll<T, S> {
    return Object.assign(target, ...sources);
}

/**
 * This function is a wrapper for Object.assign(), providing additional type information and no extra implementation.
 * This function creates a new object and returns it, not modifying any of the source objects.
 * To modify an existing target object instead, use `optel.assign()`.
 * @param sources The objects to get assigned values from
 * @returns The newly created merged object
 */
export function merge<const S extends readonly object[]>(
    ...sources: AssertAssignableTo<{}, S>
): AssignAll<{}, S> {
    return Object.assign({}, ...sources);
}

// export function strictPick<T extends object, const K extends readonly (keyof T & string)[]>(
//     object: T,
//     ...keys: K
// ): OptelPick<T, K> {
//     return pick<T, K>(object, ...keys);
// }

/**
 * Creates a copy of the given object with only the specified keys included
 * @param object The object to pick keys from
 * @param keys The keys to be picked and included on the new object
 * @returns The copied object with keys picked
 */
export function pick<
    O extends object,
    const K extends readonly string[],
>(
    object: O,
    ...keys: K
): OptelPick<O, K> {
    type Key = K[number];
    const res: Partial<OptelPick<O, K>> = {};
    for(const key of keys) {
        // @ts-ignore - idk why it is erroring here types look fine
        res[key as Extract<keyof O, Key>] = object[key as keyof O] as any;
    }
    return res as any;
}

// export function strictOmit<T extends object, const K extends readonly string[]>(
//     object: T,
//     ...keys: K
// ): OptelOmit<T, K> {
//     return omit<T, K>(object, ...keys);
// }

/**
 * Creates a copy of the given object with the specified keys removed
 * @param object The object to pick keys from
 * @param keys The keys to be picked and included on the new object
 * @returns The copied object with keys omitted
 */
export function omit<O extends object, const K extends readonly string[]>(
    object: O,
    ...keys: K
): OptelOmit<O, K> {
    type Key = K[number];
    const res: Partial<OptelOmit<O, K>> = {};
    for(const key of Object.keys(object)) {
        if(keys.indexOf(key as Key) === -1) res[key as keyof OptelOmit<O, K>] = object[key as keyof O] as any;
    }
    return res as OptelOmit<O, K>;
}

/**
 * This function returns the first key (as given by Object.entries()) that contains the given value
 * @param object The object to search for the value within
 * @param value The value to search for
 * @returns The key of the given value, or undefined if there is no key with that value in the object
 */
export function keyOf<O extends object, const V>(
    object: O,
    value: V,
): OptelKeyOf<O, V> {
    for(const [key, keyValue] of Object.entries(object)) {
        if(value === keyValue) return key as any;
    }
    return undefined as any;
}

/**
 * This function returns an array of keys that contain the given value
 * @param object The object to search for the value within
 * @param value The value to search for
 * @returns An array of keys that are assigned to the given value
 */
export function allKeysOf<O extends object, const V>(
    object: O,
    value: V,
): OptelKeyOf<O, V>[] {
    const allKeys: string[] = [];
    for(const [key, keyValue] of Object.entries(object)) {
        if(value === keyValue) allKeys.push(key);
    }
    return allKeys as any;
}

/**
 * Returns this object, but with its type changed to allow for any key to be used to index it, with its value set to unknown.
 * This function does nothing else except return the same object passed to it with additional type information.
 * @param object The object to unlock
 * @returns The same object unlocked
 */
export function unlock<const O>(object: O): OptelUnlocked<O> {
    return object as any;
}

/**
 * This function is a wrapper for Object.fromEntries(), providing additional type information and no extra implementation.
 * @param sources The entries to create an object from
 * @returns The created object
 */
export function fromEntries<const O extends readonly (readonly [key: any, value: any])[]>(...entries: O): OptelFromEntries<O> {
    return Object.fromEntries(entries);
}

// export function isIn<const K extends PropertyKey, const O>(key: K, object: O): key is Extract<keyof O, K> {
//     return true;
// }
