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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const framer_motion_1 = require("framer-motion");
const React = __importStar(require("react"));
const formatNumber_1 = require("../../../utils/formatNumber");
const animate_1 = require("../../animate");
const file_thumbnail_1 = __importStar(require("../../file-thumbnail"));
const iconify_1 = __importDefault(require("../../iconify"));
// ----------------------------------------------------------------------
function MultiFilePreview({ thumbnail, files, onRemove, sx, }) {
    if (!(files === null || files === void 0 ? void 0 : files.length)) {
        return null;
    }
    return (React.createElement(framer_motion_1.AnimatePresence, { initial: false }, files.map((file) => {
        const { key, name = "", size = 0 } = (0, file_thumbnail_1.fileData)(file);
        const isNotFormatFile = typeof file === "string";
        if (thumbnail) {
            return (React.createElement(material_1.Stack, Object.assign({ key: key, component: framer_motion_1.m.div }, (0, animate_1.varFade)().inUp, { alignItems: "center", display: "inline-flex", justifyContent: "center", sx: Object.assign({ m: 0.5, width: 80, height: 80, borderRadius: 1.25, overflow: "hidden", position: "relative", border: (theme) => `solid 1px ${theme.palette.divider}` }, sx) }),
                React.createElement(file_thumbnail_1.default, { tooltip: true, imageView: true, file: file, sx: { position: "absolute" }, imgSx: { position: "absolute" } }),
                onRemove && (React.createElement(material_1.IconButton, { size: "small", onClick: () => onRemove(file), sx: {
                        top: 4,
                        right: 4,
                        p: "1px",
                        position: "absolute",
                        color: (theme) => (0, styles_1.alpha)(theme.palette.common.white, 0.72),
                        bgcolor: (theme) => (0, styles_1.alpha)(theme.palette.grey[900], 0.48),
                        "&:hover": {
                            bgcolor: (theme) => (0, styles_1.alpha)(theme.palette.grey[900], 0.72),
                        },
                    } },
                    React.createElement(iconify_1.default, { icon: "eva:close-fill", width: 16 })))));
        }
        return (React.createElement(material_1.Stack, Object.assign({ key: key, component: framer_motion_1.m.div }, (0, animate_1.varFade)().inUp, { spacing: 2, direction: "row", alignItems: "center", sx: Object.assign({ my: 1, px: 1, py: 0.75, borderRadius: 0.75, border: (theme) => `solid 1px ${theme.palette.divider}` }, sx) }),
            React.createElement(file_thumbnail_1.default, { file: file }),
            React.createElement(material_1.Stack, { flexGrow: 1, sx: { minWidth: 0 } },
                React.createElement(material_1.Typography, { variant: "subtitle2", noWrap: true }, isNotFormatFile ? file : name),
                React.createElement(material_1.Typography, { variant: "caption", sx: { color: "text.secondary" } }, isNotFormatFile ? "" : (0, formatNumber_1.fData)(size))),
            onRemove && (React.createElement(material_1.IconButton, { edge: "end", size: "small", onClick: () => onRemove(file) },
                React.createElement(iconify_1.default, { icon: "eva:close-fill" })))));
    })));
}
exports.default = MultiFilePreview;
