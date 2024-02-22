"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varSlide = void 0;
//
const transition_1 = require("./transition");
// ----------------------------------------------------------------------
const varSlide = (props) => {
    const distance = (props === null || props === void 0 ? void 0 : props.distance) || 160;
    const durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    const durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    const easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    const easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        inUp: {
            initial: { y: distance },
            animate: { y: 0, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { y: distance, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        inDown: {
            initial: { y: -distance },
            animate: { y: 0, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { y: -distance, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        inLeft: {
            initial: { x: -distance },
            animate: { x: 0, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { x: -distance, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        inRight: {
            initial: { x: distance },
            animate: { x: 0, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { x: distance, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        // OUT
        outUp: {
            initial: { y: 0 },
            animate: { y: -distance, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { y: 0, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        outDown: {
            initial: { y: 0 },
            animate: { y: distance, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { y: 0, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        outLeft: {
            initial: { x: 0 },
            animate: { x: -distance, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { x: 0, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
        outRight: {
            initial: { x: 0 },
            animate: { x: distance, transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }) },
            exit: { x: 0, transition: (0, transition_1.varTranExit)({ durationOut, easeOut }) },
        },
    };
};
exports.varSlide = varSlide;
