import { B, Objects, Pipe, Tuples, _ } from "hotscript";
import { HOTAssign, HOTEntriesFromKeys, HOTIsNotUnion, HOTIsUnion, HOTUnionToTuple } from "./hots";
import { UnionToTuple } from "hotscript/dist/internals/helpers";

export type Interface<T> = {[K in keyof T]: T[K]};
export type Prettify<T> =
    Interface<T> extends T
        ? { [P in keyof T]: Prettify<T[P]> } & {}
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

export type Assign<T, S> = Prettify<
  { [P in RequiredKey<S>]: S[P] }
  & { [P in Exclude<RequiredKey<T>, ReadonlyKey<T> | keyof S>]: T[P] }
  & { readonly [P in ReadonlyKey<T>]: T[P] }
  & { [P in MutualOptionalKey<T, S>]?: T[P] | S[P] }
  & { [P in Exclude<OptionalKey<S>, MutualOptionalKey<T, S> | keyof T>]?: S[P] }
  & { [P in Exclude<OptionalKey<T>, MutualOptionalKey<T, S> | keyof S>]?: T[P] }
  & { [P in UnoptionalKey<T, S>]: T[P] | Required<S>[P] }
>;

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
export type AssignAll<T, S extends readonly AssignableTo<T>[]> = Pipe<T, [Tuples.Reduce<HOTAssign, _, S>]>;

export type KeyOf<T, V> = keyof Pipe<
    T,
    [
        Objects.Entries,
        HOTUnionToTuple,
        Tuples.Filter<B.Extends<[any, V], _>>,
        Tuples.ToUnion,
        Objects.FromEntries,
    ]
>;

export type IsUnion<T> = UnionToTuple<T> extends [any] ? false : true;

export type OptelPick<O, K extends readonly (keyof O)[]> = Pipe<
    K,
    [
        Objects.Mutable<K>,
        Tuples.Filter<HOTIsNotUnion>,
        Tuples.ToUnion,
        HOTUnionToTuple,
        Tuples.Map<HOTEntriesFromKeys<O>>,
        Tuples.ToUnion,
        Objects.FromEntries,
    ]
> & Pipe<
    K,
    [
        Objects.Mutable<K>,
        Tuples.Filter<HOTIsUnion>,
        Tuples.ToUnion,
        HOTUnionToTuple,
        Tuples.Map<HOTEntriesFromKeys<O>>,
        Tuples.ToUnion,
        Objects.FromEntries,
        Objects.Partial,
    ]
>;

type DefinitelyOmittedKey<K extends readonly any[]> = Pipe<
    K,
    [
        Objects.Mutable<K>,
        Tuples.Filter<HOTIsNotUnion>,
        Tuples.ToUnion,
    ]
>;


export type OptelOmit<O, K extends readonly (keyof O)[]> = Omit<O, K[number]> & Pipe<
    Exclude<K[number], DefinitelyOmittedKey<K>>,
    [
        HOTUnionToTuple,
        Tuples.Map<HOTEntriesFromKeys<O>>,
        Tuples.ToUnion,
        Objects.FromEntries,
        Objects.Partial,
    ]
>;

export type Not<T> = T extends true ? false : true;
