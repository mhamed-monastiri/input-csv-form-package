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
const material_1 = require("@mui/material");
const React = __importStar(require("react"));
const react_1 = require("react");
const react_lazy_load_image_component_1 = require("react-lazy-load-image-component");
const getRatio_1 = __importDefault(require("./getRatio"));
// ----------------------------------------------------------------------
const Image = (0, react_1.forwardRef)((_a, ref) => {
    var { ratio, disabledEffect = false, effect = "blur", sx } = _a, other = __rest(_a, ["ratio", "disabledEffect", "effect", "sx"]);
    const content = (React.createElement(material_1.Box, Object.assign({ component: react_lazy_load_image_component_1.LazyLoadImage, wrapperClassName: "wrapper", effect: disabledEffect ? undefined : effect, placeholderSrc: disabledEffect ? "/assets/transparent.png" : "/assets/placeholder.svg", sx: { width: 1, height: 1, objectFit: "cover" } }, other)));
    if (ratio) {
        return (React.createElement(material_1.Box, Object.assign({ ref: ref, component: "span" }, other, { sx: Object.assign({ width: 1, lineHeight: 1, display: "block", overflow: "hidden", position: "relative", pt: (0, getRatio_1.default)(ratio), "& .wrapper": {
                    top: 0,
                    left: 0,
                    width: 1,
                    height: 1,
                    position: "absolute",
                    backgroundSize: "cover !important",
                } }, sx) }), content));
    }
    return (React.createElement(material_1.Box, { ref: ref, component: "span", sx: Object.assign({ lineHeight: 1, display: "block", overflow: "hidden", position: "relative", "& .wrapper": {
                width: 1,
                height: 1,
                backgroundSize: "cover !important",
            } }, sx) }, content));
});
exports.default = Image;
