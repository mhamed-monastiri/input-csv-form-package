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
const React = __importStar(require("react"));
const DownloadButton_1 = __importDefault(require("./DownloadButton"));
const utils_1 = require("./utils");
function FileThumbnail({ file, tooltip, imageView, onDownload, sx, imgSx, }) {
    const { name = "", path = "", preview = "" } = (0, utils_1.fileData)(file);
    const format = (0, utils_1.fileFormat)(path || preview);
    const renderContent = format === "image" && imageView && (React.createElement(material_1.Box, { component: "img", src: preview, sx: Object.assign({ width: 1, height: 1, flexShrink: 0, objectFit: "cover" }, imgSx) }));
    if (tooltip) {
        return (React.createElement(material_1.Tooltip, { title: name },
            React.createElement(material_1.Stack, { flexShrink: 0, component: "span", alignItems: "center", justifyContent: "center", sx: {
                    width: "fit-content",
                    height: "inherit",
                } },
                renderContent,
                onDownload && React.createElement(DownloadButton_1.default, { onDownload: onDownload }))));
    }
    return (React.createElement(React.Fragment, null,
        renderContent,
        onDownload && React.createElement(DownloadButton_1.default, { onDownload: onDownload })));
}
exports.default = FileThumbnail;
