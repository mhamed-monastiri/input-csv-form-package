"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const framer_motion_1 = require("framer-motion");
const React = __importStar(require("react"));
const react_1 = require("react");
// ----------------------------------------------------------------------
const IconButtonAnimate = (0, react_1.forwardRef)((_a, ref) => {
    var { children, size = "medium" } = _a, other = __rest(_a, ["children", "size"]);
    return (React.createElement(AnimateWrap, { size: size },
        React.createElement(material_1.IconButton, Object.assign({ size: size, ref: ref }, other), children)));
});
exports.default = IconButtonAnimate;
const varSmall = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
};
const varMedium = {
    hover: { scale: 1.09 },
    tap: { scale: 0.97 },
};
const varLarge = {
    hover: { scale: 1.08 },
    tap: { scale: 0.99 },
};
function AnimateWrap({ size, children }) {
    const isSmall = size === "small";
    const isLarge = size === "large";
    return (React.createElement(material_1.Box, { component: framer_motion_1.m.div, whileTap: "tap", whileHover: "hover", variants: (isSmall && varSmall) || (isLarge && varLarge) || varMedium, sx: {
            display: "inline-flex",
        } }, children));
}
