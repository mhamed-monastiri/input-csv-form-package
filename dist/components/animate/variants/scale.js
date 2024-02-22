"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varScale = void 0;
//
const transition_1 = require("./transition");
// ----------------------------------------------------------------------
const varScale = (props) => {
    const durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    const durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    const easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    const easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        inX: {
            initial: { scaleX: 0, opacity: 0 },
            animate: { scaleX: 1, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { scaleX: 0, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        inY: {
            initial: { scaleY: 0, opacity: 0 },
            animate: { scaleY: 1, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { scaleY: 0, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        // OUT
        outX: {
            initial: { scaleX: 1, opacity: 1 },
            animate: { scaleX: 0, opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
        },
        outY: {
            initial: { scaleY: 1, opacity: 1 },
            animate: { scaleY: 0, opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
        },
    };
};
exports.varScale = varScale;
