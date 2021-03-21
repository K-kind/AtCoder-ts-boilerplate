"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_lines_1 = __importDefault(require("./get-lines"));
var rectangle_1 = __importDefault(require("./scripts/rectangle"));
var main = function () {
    get_lines_1.default().then(function (lines) {
        var result = rectangle_1.default(lines);
        console.log(result);
    });
};
// const main = async () => {
//   const lines = await getLines()
//   const result = getResult(lines)
//   console.log(result)
// }
main();
