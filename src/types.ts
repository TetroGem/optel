import { Pipe, Tuples, _ } from "hotscript";
import { HOTAssign } from "./hots";

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

export type AssertAssignableTo<T, S> =
    S extends Partial<Record<infer U, any>>[]
        ? (
            [Extract<U, ReadonlyKey<T>>] extends [never]
                ? S
                : "Sources cannot overwrite readonly properties of target"[]
        ) : "Source types are not assignable to target type"[];

export type AssignableTo<T> = Partial<T> & object;
export type AssignAll<T, S extends readonly AssignableTo<T>[]> = Pipe<T, [Tuples.Reduce<HOTAssign, _, S>]>;
