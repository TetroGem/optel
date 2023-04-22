import { Pipe, Objects, Tuples, Fn, Unions } from "hotscript";
import { HOTIsUnion, HOTUnionToTuple, HOTEntriesFromKeys, HOTIsNotUnion } from "./hots";
import { Prettify } from "./types";
interface HOTPickFilteredKeys<O, F extends Fn> extends Fn {
    return: Pipe<this['arg0'], [
        Objects.Mutable,
        Tuples.Filter<F>,
        Tuples.ToUnion,
        Unions.Extract<keyof O>,
        HOTUnionToTuple,
        Tuples.Map<HOTEntriesFromKeys<O>>,
        Tuples.ToUnion,
        Objects.FromEntries
    ]>;
}
type PickPartialKeys<O, K extends readonly string[]> = Pipe<K, [
    HOTPickFilteredKeys<O, HOTIsUnion>,
    Objects.Partial
]>;
type PickRequiredKeys<O, K extends readonly string[]> = Pipe<K, [
    HOTPickFilteredKeys<O, HOTIsNotUnion>
]>;
type PickKeys<O, K extends readonly string[]> = PickPartialKeys<O, K> & PickRequiredKeys<O, K>;
declare const unknownKeySymbol: unique symbol;
export type OptelUnknownKey = string & {
    [unknownKeySymbol]: true;
};
export type OptelPick<O, K extends readonly (string | OptelUnknownKey)[]> = Prettify<PickKeys<O, K>>;
export {};
