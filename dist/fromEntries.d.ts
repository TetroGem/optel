import { Objects, Pipe, Tuples } from "hotscript";
import { Prettify } from "./types";
export type OptelFromEntries<T extends readonly (readonly any[])[]> = Prettify<Pipe<T, [
    Objects.MutableDeep,
    Tuples.ToUnion,
    Objects.FromEntries
]>>;
