"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = __importDefault(require("readline"));
exports.default = (function () {
    return new Promise(function (resolve) {
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        var reader = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        var inputLines = [];
        reader.on('line', function (lines) {
            inputLines.push(lines);
        });
        reader.on('close', function () {
            resolve(inputLines);
        });
    });
});
