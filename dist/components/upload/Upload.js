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
const styles_1 = require("@mui/material/styles");
const React = __importStar(require("react"));
const react_dropzone_1 = require("react-dropzone");
const illustrations_1 = require("../../assets/illustrations");
const iconify_1 = __importDefault(require("../iconify"));
const RejectionFiles_1 = __importDefault(require("./errors/RejectionFiles"));
const MultiFilePreview_1 = __importDefault(require("./preview/MultiFilePreview"));
const SingleFilePreview_1 = __importDefault(require("./preview/SingleFilePreview"));
// ----------------------------------------------------------------------
const StyledDropZone = (0, styles_1.styled)("div")(({ theme }) => ({
    outline: "none",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
    padding: theme.spacing(5),
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create("padding"),
    backgroundColor: "#F4F6F8",
    border: `1px dashed ${(0, styles_1.alpha)(theme.palette.grey[500], 0.32)}`,
    "&:hover": {
        opacity: 0.72,
    },
}));
// ----------------------------------------------------------------------
function Upload(_a) {
    var { disabled, multiple = false, hideInput = false, previewFileAsFiles, error, helperText, 
    //
    file, onDelete, 
    //
    files, thumbnail, onUpload, onRemove, onRemoveAll, sx } = _a, other = __rest(_a, ["disabled", "multiple", "hideInput", "previewFileAsFiles", "error", "helperText", "file", "onDelete", "files", "thumbnail", "onUpload", "onRemove", "onRemoveAll", "sx"]);
    const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections, } = (0, react_dropzone_1.useDropzone)(Object.assign({ multiple,
        disabled }, other));
    const hasFile = !!file && !multiple;
    const hasFiles = files && multiple && (files === null || files === void 0 ? void 0 : files.length) > 0;
    const isError = isDragReject || !!error;
    return (React.createElement(material_1.Box, { sx: Object.assign({ width: 1, position: "relative" }, sx) },
        !hideInput && (React.createElement(StyledDropZone, Object.assign({}, getRootProps(), { sx: Object.assign(Object.assign(Object.assign(Object.assign({}, (isDragActive && {
                opacity: 0.72,
            })), (isError && {
                color: "error.main",
                bgcolor: "error.lighter",
                borderColor: "error.light",
            })), (disabled && {
                opacity: 0.48,
                pointerEvents: "none",
            })), (hasFile && {
                padding: "12% 0",
            })) }),
            React.createElement("input", Object.assign({}, getInputProps())),
            React.createElement(Placeholder, { sx: Object.assign({}, (hasFile && {
                    opacity: 0,
                })) }),
            hasFile && React.createElement(SingleFilePreview_1.default, { file: file }))),
        helperText && helperText,
        React.createElement(RejectionFiles_1.default, { fileRejections: fileRejections }),
        hasFile && onDelete && (React.createElement(material_1.IconButton, { size: "small", onClick: onDelete, sx: {
                top: 16,
                right: 16,
                zIndex: 9,
                position: "absolute",
                color: (theme) => (0, styles_1.alpha)(theme.palette.common.white, 0.8),
                bgcolor: (theme) => (0, styles_1.alpha)(theme.palette.grey[900], 0.72),
                "&:hover": {
                    bgcolor: (theme) => (0, styles_1.alpha)(theme.palette.grey[900], 0.48),
                },
            } },
            React.createElement(iconify_1.default, { icon: "eva:close-fill", width: 18 }))),
        (hasFiles || previewFileAsFiles) && (React.createElement(React.Fragment, null,
            React.createElement(material_1.Box, { sx: { my: 3 } },
                React.createElement(MultiFilePreview_1.default, { files: files, thumbnail: thumbnail, onRemove: onRemove })),
            React.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-end", spacing: 1.5 },
                onRemoveAll && (React.createElement(material_1.Button, { color: "inherit", variant: "outlined", size: "small", onClick: onRemoveAll }, "Remove all")),
                onUpload && !previewFileAsFiles && (React.createElement(material_1.Button, { size: "small", variant: "contained", onClick: onUpload }, "Upload files")))))));
}
exports.default = Upload;
// ----------------------------------------------------------------------
function Placeholder(_a) {
    var { sx } = _a, other = __rest(_a, ["sx"]);
    return (React.createElement(material_1.Stack, Object.assign({ spacing: 5, alignItems: "center", justifyContent: "center", direction: {
            xs: "column",
            md: "row",
        }, sx: Object.assign({ width: 1, textAlign: {
                xs: "center",
                md: "left",
            } }, sx) }, other),
        React.createElement(illustrations_1.UploadIllustration, { sx: { maxWidth: 220 } }),
        React.createElement("div", null,
            React.createElement(material_1.Typography, { gutterBottom: true, variant: "h5" }, "Drop or Select file"),
            React.createElement(material_1.Typography, { variant: "body2", sx: { color: "text.secondary" } },
                "Drop files here or click",
                React.createElement(material_1.Typography, { variant: "body2", component: "span", sx: {
                        mx: 0.5,
                        color: "primary.main",
                        textDecoration: "underline",
                    } }, "browse"),
                "thorough your machine"))));
}
