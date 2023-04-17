import { AssignAll, AssertAssignableTo, AssignableTo } from './types';
declare function assign<T extends object, S extends readonly AssignableTo<T>[]>(target: T, ...sources: AssertAssignableTo<T, S>): asserts target is AssignAll<T, S>;
declare function merge<const S extends readonly object[]>(...sources: S): AssignAll<{}, S>;
declare const _default: {
    assign: typeof assign;
    merge: typeof merge;
};
export default _default;
