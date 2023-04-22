import { Pipe, Objects, Tuples, Fn, Unions } from "hotscript";
import { HOTIsUnion, HOTUnionToTuple, HOTEntriesFromKeys, HOTIsNotUnion } from "./hots";
import { Prettify } from "./types";

interface HOTPickFilteredKeys<O, F extends Fn> extends Fn {
    return: Pipe<
        this['arg0'],
        [
            // make tuple mutable so it can be used with tuple HOTs
            Objects.Mutable,
            // Filter out keys not wanted for this object
            Tuples.Filter<F>,
            // Convert to a union of keys and back to a tuple to flatten into a one key per index tuple
            Tuples.ToUnion,
            Unions.Extract<keyof O>,
            HOTUnionToTuple,
            // Map tuple of keys to tuple of entries
            Tuples.Map<HOTEntriesFromKeys<O>>,
            // Convert to union so they can be passed to Objects.FromEntries
            Tuples.ToUnion,
            Objects.FromEntries,
        ]
    >
}

type PickPartialKeys<O, K extends readonly string[]> = Pipe<
    K,
    [
        HOTPickFilteredKeys<O, HOTIsUnion>,
        Objects.Partial,
    ]
>;

type PickRequiredKeys<O, K extends readonly string[]> = Pipe<
    K,
    [
        HOTPickFilteredKeys<O, HOTIsNotUnion>,
    ]
>;

type PickKeys<O, K extends readonly string[]> = PickPartialKeys<O, K> & PickRequiredKeys<O, K>;

const unknownKeySymbol = Symbol();
export type OptelUnknownKey = string & { [unknownKeySymbol]: true };

export type OptelPick<O, K extends readonly (string | OptelUnknownKey)[]> =
    Prettify<
        PickKeys<O, K>
    >;
