import { AssignAll, AssertAssignableTo, AssignableTo } from './types';

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
