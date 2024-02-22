"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varBgPan = exports.varBgKenburns = exports.varBgColor = void 0;
// ----------------------------------------------------------------------
const varBgColor = (props) => {
    const colors = (props === null || props === void 0 ? void 0 : props.colors) || ['#19dcea', '#b22cff'];
    const duration = (props === null || props === void 0 ? void 0 : props.duration) || 5;
    const ease = (props === null || props === void 0 ? void 0 : props.ease) || 'linear';
    return {
        animate: {
            background: colors,
            transition: { duration, ease },
        },
    };
};
exports.varBgColor = varBgColor;
// ----------------------------------------------------------------------
const varBgKenburns = (props) => {
    const duration = (props === null || props === void 0 ? void 0 : props.duration) || 5;
    const ease = (props === null || props === void 0 ? void 0 : props.ease) || 'easeOut';
    return {
        top: {
            animate: {
                scale: [1, 1.25],
                y: [0, -15],
                transformOrigin: ['50% 16%', 'top'],
                transition: { duration, ease },
            },
        },
        right: {
            animate: {
                scale: [1, 1.25],
                x: [0, 20],
                y: [0, -15],
                transformOrigin: ['84% 50%', 'right'],
                transition: { duration, ease },
            },
        },
        bottom: {
            animate: {
                scale: [1, 1.25],
                y: [0, 15],
                transformOrigin: ['50% 84%', 'bottom'],
                transition: { duration, ease },
            },
        },
        left: {
            animate: {
                scale: [1, 1.25],
                x: [0, -20],
                y: [0, 15],
                transformOrigin: ['16% 50%', 'left'],
                transition: { duration, ease },
            },
        },
    };
};
exports.varBgKenburns = varBgKenburns;
// ----------------------------------------------------------------------
const varBgPan = (props) => {
    const colors = (props === null || props === void 0 ? void 0 : props.colors) || ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'];
    const duration = (props === null || props === void 0 ? void 0 : props.duration) || 5;
    const ease = (props === null || props === void 0 ? void 0 : props.ease) || 'linear';
    const gradient = (deg) => `linear-gradient(${deg}deg, ${colors})`;
    return {
        top: {
            animate: {
                backgroundImage: [gradient(0), gradient(0)],
                backgroundPosition: ['center 99%', 'center 1%'],
                backgroundSize: ['100% 600%', '100% 600%'],
                transition: { duration, ease },
            },
        },
        right: {
            animate: {
                backgroundPosition: ['1% center', '99% center'],
                backgroundImage: [gradient(270), gradient(270)],
                backgroundSize: ['600% 100%', '600% 100%'],
                transition: { duration, ease },
            },
        },
        bottom: {
            animate: {
                backgroundImage: [gradient(0), gradient(0)],
                backgroundPosition: ['center 1%', 'center 99%'],
                backgroundSize: ['100% 600%', '100% 600%'],
                transition: { duration, ease },
            },
        },
        left: {
            animate: {
                backgroundPosition: ['99% center', '1% center'],
                backgroundImage: [gradient(270), gradient(270)],
                backgroundSize: ['600% 100%', '600% 100%'],
                transition: { duration, ease },
            },
        },
    };
};
exports.varBgPan = varBgPan;
