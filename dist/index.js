// import { TypeGuards } from "./TypeGuards";
function assign(target, ...sources) {
    return Object.assign(target, ...sources);
}
function merge(...sources) {
    return Object.assign({}, ...sources);
}
export default { assign, merge };
//# sourceMappingURL=index.js.map