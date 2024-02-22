"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varFade = void 0;
const transition_1 = require("./transition");
// ----------------------------------------------------------------------
const varFade = (props) => {
    const distance = (props === null || props === void 0 ? void 0 : props.distance) || 120;
    const durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    const durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    const easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    const easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        in: {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: transition_1.varTranEnter },
            exit: { opacity: 0, transition: transition_1.varTranExit },
        },
        inUp: {
            initial: { y: distance, opacity: 0 },
            animate: {
                y: 0,
                opacity: 1,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                y: distance,
                opacity: 0,
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        inDown: {
            initial: { y: -distance, opacity: 0 },
            animate: {
                y: 0,
                opacity: 1,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                y: -distance,
                opacity: 0,
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        inLeft: {
            initial: { x: -distance, opacity: 0 },
            animate: {
                x: 0,
                opacity: 1,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                x: -distance,
                opacity: 0,
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        inRight: {
            initial: { x: distance, opacity: 0 },
            animate: {
                x: 0,
                opacity: 1,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                x: distance,
                opacity: 0,
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        // OUT
        out: {
            initial: { opacity: 1 },
            animate: { opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { opacity: 1, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        outUp: {
            initial: { y: 0, opacity: 1 },
            animate: {
                y: -distance,
                opacity: 0,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        outDown: {
            initial: { y: 0, opacity: 1 },
            animate: {
                y: distance,
                opacity: 0,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        outLeft: {
            initial: { x: 0, opacity: 1 },
            animate: {
                x: -distance,
                opacity: 0,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        outRight: {
            initial: { x: 0, opacity: 1 },
            animate: {
                x: distance,
                opacity: 0,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
    };
};
exports.varFade = varFade;
