"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (lines) {
    var _a = lines[0].split(' ').map(Number), length = _a[0], breadth = _a[1];
    var area = length * breadth;
    var perimeter = (length + breadth) * 2;
    return area + " " + perimeter;
});
