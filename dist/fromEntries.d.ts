import { Fn, Objects, Pipe, Tuples } from "hotscript";
import { IsUnion, Not, Prettify } from "./types";
interface HOTKeyIsUnion extends Fn {
    return: IsUnion<this['arg0'][0]>;
}
interface HOTKeyIsNotUnion extends Fn {
    return: Not<IsUnion<this['arg0'][0]>>;
}
type NotUnionKeys<T extends readonly (readonly any[])[]> = Pipe<T, [
    Objects.MutableDeep,
    Tuples.Filter<HOTKeyIsNotUnion>,
    Tuples.Map<Tuples.Head>,
    Tuples.ToUnion
]>;
type UnionKeys<T extends readonly (readonly any[])[]> = Pipe<T, [
    Objects.MutableDeep,
    Tuples.Filter<HOTKeyIsNotUnion>,
    Tuples.Map<Tuples.Head>,
    Tuples.ToUnion
]>;
type UnionKeyEntriesObject<T extends readonly (readonly any[])[]> = Pipe<T, [
    Objects.MutableDeep,
    Tuples.Filter<HOTKeyIsUnion>,
    Tuples.ToUnion,
    Objects.FromEntries,
    Objects.Partial
]>;
type NotUnionKeyEntriesObject<T extends readonly (readonly any[])[]> = Pipe<T, [
    Objects.MutableDeep,
    Tuples.Filter<HOTKeyIsNotUnion>,
    Tuples.ToUnion,
    Objects.FromEntries
]>;
export type OptelFromEntries<T extends readonly (readonly any[])[]> = Prettify<Omit<NotUnionKeyEntriesObject<T>, UnionKeys<T> & PropertyKey> & {
    [P in keyof UnionKeyEntriesObject<T> & NotUnionKeys<T>]: Required<UnionKeyEntriesObject<T>>[P] | NotUnionKeyEntriesObject<T>[P];
} & Omit<UnionKeyEntriesObject<T>, NotUnionKeys<T> & PropertyKey>>;
export {};
