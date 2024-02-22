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
exports.RHFUpload = exports.RHFUploadBox = exports.RHFUploadAvatar = void 0;
const Cancel_1 = __importDefault(require("@mui/icons-material/Cancel"));
const material_1 = require("@mui/material");
const React = __importStar(require("react"));
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const formatNumber_1 = require("../../utils/formatNumber");
const iconify_1 = __importDefault(require("../iconify"));
const upload_1 = require("../upload");
// ----------------------------------------------------------------------
function RHFUploadAvatar(_a) {
    var { name, helperText } = _a, other = __rest(_a, ["name", "helperText"]);
    const { control, setValue } = (0, react_hook_form_1.useFormContext)();
    const handleDrop = (0, react_1.useCallback)((acceptedFiles) => {
        const file = acceptedFiles[0];
        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file),
        });
        if (file) {
            setValue(name, newFile, { shouldValidate: true });
        }
    }, [setValue, name]);
    const handleRemoveFile = () => {
        setValue(name, "", { shouldValidate: true });
    };
    return (React.createElement(react_hook_form_1.Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (React.createElement(React.Fragment, null,
            React.createElement(upload_1.UploadAvatar, Object.assign({ ModelImage: "Logo *", accept: {
                    "image/*": [],
                }, error: !!error, file: field.value, onDrop: handleDrop, onDelete: handleRemoveFile, helperText: React.createElement(material_1.Typography, { variant: "caption", sx: {
                        mt: 2,
                        mx: "auto",
                        display: "block",
                        textAlign: "center",
                        color: "text.secondary",
                    } },
                    React.createElement(material_1.Stack, { sx: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "20px",
                            width: "100%",
                        } },
                        React.createElement(React.Fragment, null,
                            "Allowed *.jpeg, *.jpg, *.png, *.gif",
                            React.createElement("br", null),
                            `max size of `,
                            (0, formatNumber_1.fData)(5000000),
                            field.value && (React.createElement(material_1.IconButton, { onClick: handleRemoveFile, color: "error", "aria-label": "delete" },
                                React.createElement(Cancel_1.default, { color: "error" })))),
                        React.createElement(material_1.Tooltip, { title: "Logo *", placement: "right-start" },
                            React.createElement(iconify_1.default, { icon: "ri:information-line", width: 23, sx: { cursor: "help", color: "#9AA6B2" } })))) }, other)),
            !!error && (React.createElement(material_1.FormHelperText, { error: true, sx: { px: 2, textAlign: "center" } }, error === null || error === void 0 ? void 0 : error.message)))) }));
}
exports.RHFUploadAvatar = RHFUploadAvatar;
// ----------------------------------------------------------------------
function RHFUploadBox(_a) {
    var { name } = _a, other = __rest(_a, ["name"]);
    const { control } = (0, react_hook_form_1.useFormContext)();
    return (React.createElement(react_hook_form_1.Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (React.createElement(upload_1.UploadBox, Object.assign({ files: field.value, error: !!error }, other))) }));
}
exports.RHFUploadBox = RHFUploadBox;
// ----------------------------------------------------------------------
function RHFUpload(_a) {
    var { name, multiple, helperText, files, label } = _a, other = __rest(_a, ["name", "multiple", "helperText", "files", "label"]);
    const { control, setValue } = (0, react_hook_form_1.useFormContext)();
    const handleDrop = (0, react_1.useCallback)((acceptedFiles) => {
        const file = acceptedFiles[0];
        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file),
        });
        if (file) {
            setValue(name, newFile, { shouldValidate: true });
        }
    }, [setValue, name]);
    const handleRemoveFile = () => {
        setValue(name, "", { shouldValidate: true });
    };
    return (React.createElement(react_hook_form_1.Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => multiple ? (React.createElement(upload_1.Upload, Object.assign({ multiple: true, accept: { "image/*": [] }, files: field.value, onDrop: handleDrop, onDelete: handleRemoveFile, error: !!error, helperText: (!!error || helperText) && (React.createElement(material_1.FormHelperText, { error: !!error, sx: { px: 2 } }, error ? error === null || error === void 0 ? void 0 : error.message : helperText)) }, other))) : (React.createElement(upload_1.Upload, Object.assign({ accept: { "image/*": [] }, thumbnail: field.value, file: field.value, error: !!error, onDrop: handleDrop, onDelete: handleRemoveFile, helperText: (!!error || helperText) && (React.createElement(material_1.FormHelperText, { error: !!error, sx: { px: 2 } }, error ? error === null || error === void 0 ? void 0 : error.message : helperText)) }, other))) }));
}
exports.RHFUpload = RHFUpload;
