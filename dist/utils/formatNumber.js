"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fData = void 0;
const numeral_1 = __importDefault(require("numeral"));
function fData(number) {
    const format = number ? (0, numeral_1.default)(number).format("0.0 b") : "";
    return result(format, ".0");
}
exports.fData = fData;
function result(format, key = ".00") {
    const isInteger = format.includes(key);
    return isInteger ? format.replace(key, "") : format;
}
