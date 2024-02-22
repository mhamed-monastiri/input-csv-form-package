"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.varPath = exports.TRANSITION = void 0;
exports.TRANSITION = {
    duration: 2,
    ease: [0.43, 0.13, 0.23, 0.96],
};
exports.varPath = {
    animate: {
        fillOpacity: [0, 0, 1],
        pathLength: [1, 0.4, 0],
        transition: exports.TRANSITION,
    },
};
