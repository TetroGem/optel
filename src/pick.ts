import { Pipe, Objects, Tuples, Fn, Strings, Booleans } from "hotscript";
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

interface HOTDoesNotExtend<T> extends Fn {
    return: this['arg0'] extends T ? false : true;
}

// const stringExcludeSymbol = Symbol();
// // type StringExcludeSymbol = typeof stringExcludeSymbol;
// export type OptelStringExclude<N extends string> = string & { [stringExcludeSymbol]: N };

const unknownKeySymbol = Symbol();
// type StringExcludeSymbol = typeof stringExcludeSymbol;
export type OptelUnknownKeyFor<V> = string & { [unknownKeySymbol]: V };

// type PickAllKeysExcept<O, K extends readonly string[]> = OptelOmit<O, AssertTuple<Readonly<Tuplify<K[number]>>>>;

// type PickKeysFromStringOrStringExclude<O, K extends readonly (string | OptelStringExclude<string>)[]> =
//     PickKeys<O, IncludedKeys<K>> &
//     ([ExcludedKeys<K>] extends [readonly []] ? {} : PickAllKeysExcept<O, ExcludedKeys<K>>);

// interface HOTUnwrapStringExclude extends Fn {
//     return: this['arg0'] extends OptelStringExclude<infer U> ? U : never;
// }

interface HOTUnwrapUnknownKeyFor extends Fn {
    return: this['arg0'] extends OptelUnknownKeyFor<infer U> ? U : never;
}

// type ExcludedKeys<K extends readonly (string | OptelStringExclude<string>)[]> =
//     AssertTuple<
//         Pipe<
//             K,
//             [
//                 Objects.Mutable,
//                 Tuples.Filter<Booleans.Extends<OptelStringExclude<string>>>,
//                 Tuples.Map<HOTUnwrapStringExclude>,
//                 Objects.Readonly,
//             ]
//         >
//     >;

// type IncludedKeys<K extends readonly (string | OptelStringExclude<string>)[]> =
//     AssertTuple<
//         Pipe<
//             K,
//             [
//                 Objects.Mutable,
//                 Tuples.Filter<HOTDoesNotExtend<OptelStringExclude<string>>>,
//                 Objects.Readonly,
//             ]
//         >
//     >;

// type KE = [OptelStringExclude<'bar' | 'qux'>, 'foo', 'foo' | 'bar', OptelStringExclude<'bar'>];
// type EKK = ExcludedKeys<KE>;
// //    ^?
// type IKK = IncludedKeys<KE>
//    ^?

export type OptelPick<O, K extends readonly (string | OptelUnknownKeyFor<any>)[]> =
    Prettify<
        PickKeys<O, K>
    >;
