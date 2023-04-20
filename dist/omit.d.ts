import { Pipe, Objects, Tuples } from "hotscript";
import { HOTIsNotUnion, HOTUnionToTuple, HOTEntriesFromKeys } from "./hots";
import { Prettify } from "./types";
import { OptelUnknownKey } from "./pick";
type DefinitelyOmittedKey<K extends readonly any[]> = Pipe<K, [
    Objects.Mutable<K>,
    Tuples.Filter<HOTIsNotUnion>,
    Tuples.ToUnion
]>;
export type OptelOmit<O, K extends readonly string[]> = Prettify<Omit<Omit<O, K[number]> & Pipe<Exclude<K[number], DefinitelyOmittedKey<K>>, [
    HOTUnionToTuple,
    Tuples.Map<HOTEntriesFromKeys<O>>,
    Tuples.ToUnion,
    Objects.FromEntries,
    Objects.Partial
]>, OptelUnknownKey>>;
export {};
