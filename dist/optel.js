export function entries(object) {
    return Object.entries(object);
}
function removeUndefinedValues(object) {
    return Object.fromEntries(entries(object).filter(([_, value]) => value !== undefined));
}
export function assignDefined(target, ...sources) {
    return Object.assign(target, ...sources.map(source => removeUndefinedValues(source)));
}
export function mergeDefined(...sources) {
    return Object.assign({}, ...sources.map(source => removeUndefinedValues(source)));
}
export function assign(target, ...sources) {
    return Object.assign(target, ...sources);
}
export function merge(...sources) {
    return Object.assign({}, ...sources);
}
export function strictPick(object, ...keys) {
    return pick(object, ...keys);
}
export function pick(object, ...keys) {
    const res = {};
    for (const key of keys) {
        // @ts-ignore - idk why it is erroring here types look fine
        res[key] = object[key];
    }
    return res;
}
export function strictOmit(object, ...keys) {
    return omit(object, ...keys);
}
export function omit(object, ...keys) {
    const res = {};
    for (const key of Object.keys(object)) {
        if (keys.indexOf(key) === -1)
            res[key] = object[key];
    }
    return res;
}
// old inaccurate return type: [KeyOf<T, V>] extends [never] ? undefined : KeyOf<T, V>
// an extra property could be added with the same value, in which case it's possible that could be returned
export function keyOf(object, value) {
    for (const [key, keyValue] of Object.entries(object)) {
        if (value === keyValue)
            return key;
    }
    return undefined;
}
export function allKeysOf(object, value) {
    const allKeys = [];
    for (const [key, keyValue] of Object.entries(object)) {
        if (value === keyValue)
            allKeys.push(key);
    }
    return allKeys;
}
// export function isKey<const K extends string>(key: string, ...options: K[]): key is K {
//     return options.includes(key as K);
// }
export function unlock(object) {
    return object;
}
export function fromEntries(...entries) {
    return Object.fromEntries(entries);
}
const obj = {
    foo: 1,
    bar: "hi",
};
const ents = entries(obj);
const recon = fromEntries([0, 1], [1, 2]);
//# sourceMappingURL=optel.js.map