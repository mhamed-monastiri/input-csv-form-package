"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varRotate = void 0;
//
const transition_1 = require("./transition");
// ----------------------------------------------------------------------
const varRotate = (props) => {
    const durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    const durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    const easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    const easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        in: {
            initial: { opacity: 0, rotate: -360 },
            animate: { opacity: 1, rotate: 0, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { opacity: 0, rotate: -360, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        // OUT
        out: {
            initial: { opacity: 1, rotate: 0 },
            animate: { opacity: 0, rotate: -360, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
    };
};
exports.varRotate = varRotate;
