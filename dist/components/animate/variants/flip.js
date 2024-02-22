"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varFlip = void 0;
//
const transition_1 = require("./transition");
// ----------------------------------------------------------------------
const varFlip = (props) => {
    const durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    const durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    const easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    const easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        inX: {
            initial: { rotateX: -180, opacity: 0 },
            animate: { rotateX: 0, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { rotateX: -180, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        inY: {
            initial: { rotateY: -180, opacity: 0 },
            animate: { rotateY: 0, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { rotateY: -180, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        // OUT
        outX: {
            initial: { rotateX: 0, opacity: 1 },
            animate: { rotateX: 70, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        outY: {
            initial: { rotateY: 0, opacity: 1 },
            animate: { rotateY: 70, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
    };
};
exports.varFlip = varFlip;
