"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varBounce = void 0;
//
const transition_1 = require("./transition");
// ----------------------------------------------------------------------
const varBounce = (props) => {
    const durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    const durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    const easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    const easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        in: {
            initial: {},
            animate: {
                scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
                opacity: [0, 1, 1, 1, 1, 1],
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                scale: [0.9, 1.1, 0.3],
                opacity: [1, 1, 0],
            },
        },
        inUp: {
            initial: {},
            animate: {
                y: [720, -24, 12, -4, 0],
                scaleY: [4, 0.9, 0.95, 0.985, 1],
                opacity: [0, 1, 1, 1, 1],
                transition: Object.assign({}, (0, transition_1.varTranEnter)({ durationIn, easeIn })),
            },
            exit: {
                y: [12, -24, 720],
                scaleY: [0.985, 0.9, 3],
                opacity: [1, 1, 0],
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        inDown: {
            initial: {},
            animate: {
                y: [-720, 24, -12, 4, 0],
                scaleY: [4, 0.9, 0.95, 0.985, 1],
                opacity: [0, 1, 1, 1, 1],
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                y: [-12, 24, -720],
                scaleY: [0.985, 0.9, 3],
                opacity: [1, 1, 0],
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        inLeft: {
            initial: {},
            animate: {
                x: [-720, 24, -12, 4, 0],
                scaleX: [3, 1, 0.98, 0.995, 1],
                opacity: [0, 1, 1, 1, 1],
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                x: [0, 24, -720],
                scaleX: [1, 0.9, 2],
                opacity: [1, 1, 0],
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        inRight: {
            initial: {},
            animate: {
                x: [720, -24, 12, -4, 0],
                scaleX: [3, 1, 0.98, 0.995, 1],
                opacity: [0, 1, 1, 1, 1],
                transition: (0, transition_1.varTranEnter)({ durationIn, easeIn }),
            },
            exit: {
                x: [0, -24, 720],
                scaleX: [1, 0.9, 2],
                opacity: [1, 1, 0],
                transition: (0, transition_1.varTranExit)({ durationOut, easeOut }),
            },
        },
        // OUT
        out: {
            animate: { scale: [0.9, 1.1, 0.3], opacity: [1, 1, 0] },
        },
        outUp: {
            animate: { y: [-12, 24, -720], scaleY: [0.985, 0.9, 3], opacity: [1, 1, 0] },
        },
        outDown: {
            animate: { y: [12, -24, 720], scaleY: [0.985, 0.9, 3], opacity: [1, 1, 0] },
        },
        outLeft: {
            animate: { x: [0, 24, -720], scaleX: [1, 0.9, 2], opacity: [1, 1, 0] },
        },
        outRight: {
            animate: { x: [0, -24, 720], scaleX: [1, 0.9, 2], opacity: [1, 1, 0] },
        },
    };
};
exports.varBounce = varBounce;
