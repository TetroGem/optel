/**
 * This function is a wrapper for Object.entries(), providing additional type information and no extra implementation
 * @param object The object to get the entries of
 * @returns An array of tuples representing all the entries of the given object
 */
export function entries(object) {
    return Object.entries(object);
}
function removeUndefinedValues(object) {
    return Object.fromEntries(entries(object).filter(([_, value]) => value !== undefined));
}
/**
 * Assigns all keys of source objects that do not have their value set to undefined to the target object
 * It does not return the target object, but instead asserts its type. To create a new object, use `optel.mergeDefined()`.
 * @param target The object to assign to
 * @param sources The objects to get assigned values from
 */
export function assignDefined(target, ...sources) {
    return Object.assign(target, ...sources.map(source => removeUndefinedValues(source)));
}
/**
 * Creates a new object with all of its keys assigned to their respective values from the source objects, only being
 * assigned if that value is not undefined.
 * This function creates a new object and returns it, not modifying any of the source objects.
 * To modify an existing target object instead, use `optel.assignDefined()`.
 * @param sources The objects to get assigned values from
 * @returns The newly created merged object
 */
export function mergeDefined(...sources) {
    return Object.assign({}, ...sources.map(source => removeUndefinedValues(source)));
}
/**
 * This function is a wrapper for Object.assign(), providing additional type information and no extra implementation.
 * It does not return the target object, but instead asserts its type. To create a new object, use `optel.merge()`.
 * @param target The object to assign to
 * @param sources The objects to get assigned values from
 */
export function assign(target, ...sources) {
    return Object.assign(target, ...sources);
}
/**
 * This function is a wrapper for Object.assign(), providing additional type information and no extra implementation.
 * This function creates a new object and returns it, not modifying any of the source objects.
 * To modify an existing target object instead, use `optel.assign()`.
 * @param sources The objects to get assigned values from
 * @returns The newly created merged object
 */
export function merge(...sources) {
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
export function pick(object, ...keys) {
    const res = {};
    for (const key of keys) {
        // @ts-ignore - idk why it is erroring here types look fine
        res[key] = object[key];
    }
    return res;
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
export function omit(object, ...keys) {
    const res = {};
    for (const key of Object.keys(object)) {
        if (keys.indexOf(key) === -1)
            res[key] = object[key];
    }
    return res;
}
/**
 * This function returns the first key (as given by Object.entries()) that contains the given value
 * @param object The object to search for the value within
 * @param value The value to search for
 * @returns The key of the given value, or undefined if there is no key with that value in the object
 */
export function keyOf(object, value) {
    for (const [key, keyValue] of Object.entries(object)) {
        if (value === keyValue)
            return key;
    }
    return undefined;
}
/**
 * This function returns an array of keys that contain the given value
 * @param object The object to search for the value within
 * @param value The value to search for
 * @returns An array of keys that are assigned to the given value
 */
export function allKeysOf(object, value) {
    const allKeys = [];
    for (const [key, keyValue] of Object.entries(object)) {
        if (value === keyValue)
            allKeys.push(key);
    }
    return allKeys;
}
/**
 * Returns this object, but with its type changed to allow for any key to be used to index it, with its value set to unknown.
 * This function does nothing else except return the same object passed to it with additional type information.
 * @param object The object to unlock
 * @returns The same object unlocked
 */
export function unlock(object) {
    return object;
}
/**
 * This function is a wrapper for Object.fromEntries(), providing additional type information and no extra implementation.
 * @param sources The entries to create an object from
 * @returns The created object
 */
export function fromEntries(...entries) {
    return Object.fromEntries(entries);
}
// export function isIn<const K extends PropertyKey, const O>(key: K, object: O): key is Extract<keyof O, K> {
//     return true;
// }
//# sourceMappingURL=optel.js.map