export function assign(target, ...sources) {
    return Object.assign(target, ...sources);
}
export function merge(...sources) {
    return Object.assign({}, ...sources);
}
export function pick(object, ...keys) {
    const res = {};
    for (const key of keys) {
        res[key] = object[key];
    }
    return res;
}
export function omit(object, ...keys) {
    const res = {};
    for (const key of Object.keys(object)) {
        if (keys.indexOf(key) === -1)
            res[key] = object[key];
    }
    return res;
}
export function keyOf(object, value) {
    for (const [key, keyValue] of Object.entries(object)) {
        if (value === keyValue)
            return key;
    }
    return undefined;
}
//# sourceMappingURL=optel.js.map