"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetter = exports.camelToFlat = void 0;
function camelToFlat(camel) {
    const camelCase = camel.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ");
    let flat = "";
    camelCase.forEach((word) => {
        flat = flat + word.charAt(0).toUpperCase() + word.slice(1) + " ";
    });
    return flat;
}
exports.camelToFlat = camelToFlat;
function capitalizeFirstLetter(inputString) {
    var _a;
    return (_a = inputString === null || inputString === void 0 ? void 0 : inputString.charAt(0)) === null || _a === void 0 ? void 0 : _a.toUpperCase().concat(inputString === null || inputString === void 0 ? void 0 : inputString.slice(1));
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
