import { B, Fn, Objects, Pipe, Tuples, _ } from "hotscript";
import { HOTAssign, HOTDefinedAssign, HOTEntriesFromKeys, HOTIsNotUnion, HOTIsUnion, HOTUnionToTuple } from "./hots";
import { UnionToTuple } from "hotscript/dist/internals/helpers";

export type Interface<T> = {[K in keyof T]: T[K]};
export type Prettify<T> =
    unknown extends T
        ? unknown
        : Interface<T> extends T
            ? { [P in keyof T]: Prettify<T[P]> }
            : T;

// credit: https://stackoverflow.com/questions/53809467/typescript-how-get-optional-keys-of-type
export type MappedC<A, B> = { [P in keyof A & keyof B]: A[P] extends B[P] ? never : P };

export type OptionalKey<T> = MappedC<T, Required<T>>[keyof T];
export type RequiredKey<T> = Exclude<keyof T, OptionalKey<T>>;
export type UnoptionalKey<T, S> = Extract<OptionalKey<S>, RequiredKey<T>>;
export type MutualOptionalKey<T, S> = Extract<OptionalKey<T>, OptionalKey<S>>;
// <credit: https://github.com/type-challenges/type-challenges/issues/13>
export type IfEquals<X, Y, A, B> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? A : B;
export type ReadonlyKey<T> = {
  [K in keyof T]-?: IfEquals<Pick<T, K>, Readonly<Pick<T, K>>, K, never>
}[keyof T]
// </credit>

export type DefinedAssign<T, S> = Prettify<
  { [P in RequiredKey<S>]: S[P] } // Keys required in source which will overwrite target always
  & { [P in Exclude<RequiredKey<T>, ReadonlyKey<T> | keyof S>]: T[P] } // Keys required in T that are not readonly or in sources
  & { readonly [P in ReadonlyKey<T>]: T[P] } // Readonly keys in T, which can't be overwritten
  & { [P in MutualOptionalKey<T, S>]?: T[P] | S[P] } // Keys that are optional in both T and S which will be combined into another optional
  & { [P in Exclude<OptionalKey<S>, MutualOptionalKey<T, S> | keyof T>]?: S[P] } // Keys that are optional and only in S
  & { [P in Exclude<OptionalKey<T>, MutualOptionalKey<T, S> | keyof S>]?: T[P] } // Keys that are optional and only in T
  & { [P in UnoptionalKey<T, S>]: T[P] | Required<S>[P] } // Keys that are required in T but optional in S, will form a union of their types
>;
export type DefinedAssignAll<T, S extends readonly AssignableTo<T>[]> = Pipe<T, [Tuples.Reduce<HOTDefinedAssign, _, S>]>;

// Any key that can be set to undefined/is optional will always stay optional (as it can be a defined key set to undefined)
export type Assign<T, S> = Prettify<
    { [P in RequiredKey<S>]: S[P] } // Keys required in source which will overwrite target always
    & { [P in Exclude<RequiredKey<T>, ReadonlyKey<T> | keyof S>]: T[P] } // Keys required in T that are not readonly or in sources
    & { readonly [P in ReadonlyKey<T>]: T[P] } // Readonly keys in T, which can't be overwritten
    & { [P in MutualOptionalKey<T, S>]?: T[P] | S[P] } // Keys that are optional in both T and S which will be combined into another optional
    & { [P in Exclude<OptionalKey<S>, MutualOptionalKey<T, S> | keyof T>]?: S[P] } // Keys that are optional and only in S
    & { [P in Exclude<OptionalKey<T>, MutualOptionalKey<T, S> | keyof S>]?: T[P] } // Keys that are optional and only in T
    & { [P in UnoptionalKey<T, S>]?: T[P] | Required<S>[P] } // Keys that are required in T but optional in S, will form a union of their types
>;
export type AssignAll<T, S extends readonly AssignableTo<T>[]> = Pipe<T, [Tuples.Reduce<HOTAssign, _, S>]>;

export type AssertAssignableTo<T, S extends readonly any[]> =
    Interface<S[number]> extends S[number]
        ? S extends Partial<infer U>[]
            ? (
                [Extract<keyof U, ReadonlyKey<T>>] extends [never]
                    ? Interface<T> extends T
                        ? S
                        : [Exclude<keyof U, keyof Interface<T>>] extends [never]
                            ? S
                            : "Sources can only contain public properties of a target with private properties"[]
                    : "Sources cannot overwrite readonly properties of target"[]
            ) : S
        : "Sources cannot have private properties"[]
        ;


export type AssignableTo<T> = Partial<T> & object;

export type AssertTuple<T> = T extends infer U extends readonly any[] ? U : never;
export type AssertString<T> = T extends infer U extends string ? U : never;

interface HOTAssertTuple extends Fn {
    return: Readonly<AssertTuple<this['arg0']>>;
}

export type KeyOf<T, V> = keyof Pipe<
    T,
    [
        Objects.Entries,
        HOTUnionToTuple,
        HOTAssertTuple,
        Objects.Mutable,
        Tuples.Filter<B.Extends<[any, V], _>>,
        Tuples.ToUnion,
        Objects.FromEntries,
    ]
>;

export type IsUnion<T> = UnionToTuple<T> extends [any] ? false : true;

export type Not<T> = T extends true ? false : true;


// <credit src=https://stackoverflow.com/questions/55127004/how-to-transform-union-type-to-tuple-type>
type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
type LastOf<T> =
  UnionToIntersection<T extends any ? () => T : never> extends () => (infer R) ? R : never
type Push<T extends any[], V> = [...T, V];

export type Tuplify<T, L = LastOf<T>, N = [T] extends [never] ? true : false> =
  true extends N ? [] : Push<Tuplify<Exclude<T, L>>, L>
// </credit>

interface HOTEntryValueIsDefined extends Fn {
    return: IfEquals<this['arg0'][1], undefined, false, true>;
}

export type DefinedValuesOnly<O extends object> =
Prettify<
    Pipe<
        O,
        [
            Objects.Entries,
            HOTUnionToTuple,
            Tuples.Filter<HOTEntryValueIsDefined>,
            Tuples.ToUnion,
            Objects.FromEntries,
        ]
    >
>;
