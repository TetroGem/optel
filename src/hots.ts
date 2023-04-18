import { Fn } from "hotscript";
import { UnionToTuple } from "hotscript/dist/internals/helpers";
import { Assign } from "./types";

export interface HOTAssign extends Fn {
    return: Assign<this['arg0'], this['arg1']>;
}

export interface HOTUnionToTuple extends Fn {
    return: UnionToTuple<this['arg0']>;
}

// export interface HOTToFilterableEntries extends Fn {
//     return: []
// }
