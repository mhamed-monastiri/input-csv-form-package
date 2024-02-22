"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varTranExit = exports.varTranEnter = exports.varTranHover = void 0;
// ----------------------------------------------------------------------
const varTranHover = (props) => {
    const duration = (props === null || props === void 0 ? void 0 : props.duration) || 0.32;
    const ease = (props === null || props === void 0 ? void 0 : props.ease) || [0.43, 0.13, 0.23, 0.96];
    return { duration, ease };
};
exports.varTranHover = varTranHover;
const varTranEnter = (props) => {
    const duration = (props === null || props === void 0 ? void 0 : props.durationIn) || 0.64;
    const ease = (props === null || props === void 0 ? void 0 : props.easeIn) || [0.43, 0.13, 0.23, 0.96];
    return { duration, ease };
};
exports.varTranEnter = varTranEnter;
const varTranExit = (props) => {
    const duration = (props === null || props === void 0 ? void 0 : props.durationOut) || 0.48;
    const ease = (props === null || props === void 0 ? void 0 : props.easeOut) || [0.43, 0.13, 0.23, 0.96];
    return { duration, ease };
};
exports.varTranExit = varTranExit;
