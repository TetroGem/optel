import { Fn } from "hotscript";
import { Not, UnionToTuple } from "hotscript/dist/internals/helpers";
import { Assign, IsUnion } from "./types";
export interface HOTAssign extends Fn {
    return: Assign<this['arg0'], this['arg1']>;
}
export interface HOTUnionToTuple extends Fn {
    return: UnionToTuple<this['arg0']>;
}
export interface HOTIsUnion extends Fn {
    return: IsUnion<this['arg0']>;
}
export interface HOTIsNotUnion extends Fn {
    return: Not<IsUnion<this['arg0']>>;
}
export interface HOTEntriesFromKeys<O> extends Fn {
    return: [this['arg0'], O[this['arg0']]];
}
export interface HOTNeverEntriesFromKeys extends Fn {
    return: [this['arg0'], never];
}
