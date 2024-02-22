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
const React = __importStar(require("react"));
const react_dropzone_1 = require("react-dropzone");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const iconify_1 = __importDefault(require("../iconify"));
const RejectionFiles_1 = __importDefault(require("./errors/RejectionFiles"));
const AvatarPreview_1 = __importDefault(require("./preview/AvatarPreview"));
// ----------------------------------------------------------------------
const StyledDropZone = (0, styles_1.styled)("div")(({ theme }) => ({
    width: 144,
    height: 144,
    margin: "auto",
    display: "flex",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: "50%",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    border: `1px dashed ${(0, styles_1.alpha)(theme.palette.grey[500], 0.32)}`,
}));
const StyledPlaceholder = (0, styles_1.styled)("div")(({ theme }) => ({
    zIndex: 7,
    display: "flex",
    borderRadius: "50%",
    position: "absolute",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: `calc(100% - 16px)`,
    height: `calc(100% - 16px)`,
    color: theme.palette.text.disabled,
    backgroundColor: "#919EAB",
    transition: theme.transitions.create("opacity", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
}));
// ----------------------------------------------------------------------
function UploadAvatar(_a) {
    var { ModelImage, error, file, disabled, helperText, sx } = _a, other = __rest(_a, ["ModelImage", "error", "file", "disabled", "helperText", "sx"]);
    const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections, } = (0, react_dropzone_1.useDropzone)(Object.assign({ multiple: false, disabled }, other));
    const hasFile = !!file;
    const isError = isDragReject || !!error;
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledDropZone, Object.assign({}, getRootProps(), { sx: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (isDragActive && {
                opacity: 0.72,
            })), (isError && Object.assign({ borderColor: "error.light" }, (hasFile && {
                bgcolor: "error.lighter",
            })))), (disabled && {
                opacity: 0.48,
                pointerEvents: "none",
            })), (hasFile && {
                "&:hover": {
                    "& .placeholder": {
                        opacity: 1,
                    },
                },
            })), sx) }),
            React.createElement("input", Object.assign({}, getInputProps())),
            hasFile && React.createElement(AvatarPreview_1.default, { file: file }),
            React.createElement(StyledPlaceholder, { className: "placeholder", sx: Object.assign(Object.assign({ "&:hover": {
                        opacity: 0.72,
                    } }, (hasFile && {
                    zIndex: 9,
                    opacity: 0,
                    color: "common.white",
                    bgcolor: (theme) => (0, styles_1.alpha)(theme.palette.grey[900], 0.64),
                })), (isError && {
                    color: "error.main",
                    bgcolor: "error.lighter",
                })) },
                React.createElement(iconify_1.default, { icon: "ic:round-photo", width: 24, sx: { mb: 1 } }),
                React.createElement(material_1.Typography, { variant: "caption" }, ModelImage))),
        helperText && helperText,
        React.createElement(RejectionFiles_1.default, { fileRejections: fileRejections })));
}
exports.default = UploadAvatar;
