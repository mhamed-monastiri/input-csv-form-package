"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varZoom = void 0;
//
const transition_1 = require("./transition");
// ----------------------------------------------------------------------
const varZoom = (props) => {
    const distance = (props === null || props === void 0 ? void 0 : props.distance) || 720;
    const durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    const durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    const easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    const easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        in: {
            initial: { scale: 0, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { scale: 0, opacity: 0, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        inUp: {
            initial: { scale: 0, opacity: 0, translateY: distance },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        inDown: {
            initial: { scale: 0, opacity: 0, translateY: -distance },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        inLeft: {
            initial: { scale: 0, opacity: 0, translateX: -distance },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        inRight: {
            initial: { scale: 0, opacity: 0, translateX: distance },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        // OUT
        out: {
            initial: { scale: 1, opacity: 1 },
            animate: { scale: 0, opacity: 0, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
        },
        outUp: {
            initial: { scale: 1, opacity: 1 },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
        },
        outDown: {
            initial: { scale: 1, opacity: 1 },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
        },
        outLeft: {
            initial: { scale: 1, opacity: 1 },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
        },
        outRight: {
            initial: { scale: 1, opacity: 1 },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
        },
    };
};
exports.varZoom = varZoom;
