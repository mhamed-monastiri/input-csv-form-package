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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const material_1 = require("@mui/material");
const framer_motion_1 = require("framer-motion");
const React = __importStar(require("react"));
const variants_1 = require("./variants");
function DialogAnimate(_a) {
    var { open = false, variants, onClose, children, sx } = _a, other = __rest(_a, ["open", "variants", "onClose", "children", "sx"]);
    return (React.createElement(framer_motion_1.AnimatePresence, null, open && (React.createElement(material_1.Dialog, Object.assign({ fullWidth: true, maxWidth: "xs", open: open, onClose: onClose, PaperComponent: (props) => (React.createElement(material_1.Box, Object.assign({ component: framer_motion_1.m.div }, (variants ||
            (0, variants_1.varFade)({
                distance: 120,
                durationIn: 0.32,
                durationOut: 0.24,
                easeIn: "easeInOut",
            }).inUp), { sx: {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            } }),
            React.createElement(material_1.Box, { onClick: onClose, sx: { width: "100%", height: "100%", position: "fixed" } }),
            React.createElement(material_1.Paper, Object.assign({ sx: sx }, props), props.children))) }, other),
        onClose && (React.createElement(material_1.IconButton, { "aria-label": "close", onClick: onClose, sx: {
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            } },
            React.createElement(Close_1.default, null))),
        children))));
}
exports.default = DialogAnimate;
