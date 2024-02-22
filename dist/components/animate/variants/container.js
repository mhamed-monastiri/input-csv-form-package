"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.varContainer = void 0;
const varContainer = (props) => {
    const staggerIn = (props === null || props === void 0 ? void 0 : props.staggerIn) || 0.05;
    const delayIn = (props === null || props === void 0 ? void 0 : props.staggerIn) || 0.05;
    const staggerOut = (props === null || props === void 0 ? void 0 : props.staggerIn) || 0.05;
    return {
        animate: {
            transition: {
                staggerChildren: staggerIn,
                delayChildren: delayIn,
            },
        },
        exit: {
            transition: {
                staggerChildren: staggerOut,
                staggerDirection: -1,
            },
        },
    };
};
exports.varContainer = varContainer;
