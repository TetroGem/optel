import { Fn } from "hotscript";
import { Assign } from "./types";

export interface HOTAssign extends Fn {
    return: Assign<this['arg0'], this['arg1']>;
}
