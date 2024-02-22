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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
const yup_1 = require("@hookform/resolvers/yup");
const lab_1 = require("@mui/lab");
const material_1 = require("@mui/material");
const dayjs_1 = __importDefault(require("dayjs"));
const React = __importStar(require("react"));
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const Yup = __importStar(require("yup"));
const customized_dialogs_1 = require("./components/customized-dialogs");
const hook_form_1 = require("./components/hook-form");
const FormProvider_1 = __importDefault(require("./components/hook-form/FormProvider"));
const iconify_1 = __importDefault(require("./components/iconify"));
const upload_1 = require("./components/upload");
const exportDataInCSVFile_1 = require("./utils/exportDataInCSVFile");
// ----------------------------------------------------------------------
function ImportCsvDialog(_a) {
    var _b, _c, _d;
    var { open, existDate = true, existAmount = true, existOrderFields = true, firstAmountColumn = "Credit", secondAmountColumn = "Debit", onClose, onSubmit, fieldsToBeOrder = [], delimiters = [
        { label: "Comma", value: "," },
        { label: "Semicolon", value: ";" },
        { label: "Pipe", value: "|" },
        { label: "Colon", value: ":" },
        { label: "Space", value: " " },
        { label: "Period", value: "." },
        { label: "Hyphen", value: "-" },
        { label: "Underscore", value: "_" },
        { label: "Slash", value: "/" },
    ], qualifiers = [
        { label: "Double Quote", value: '"' },
        { label: "Single Quote", value: "'" },
        { label: "Backtick", value: "`" },
    ], datesFormats = [
        "YYYY-MM-DD",
        "DD/MM/YYYY",
        "MM/DD/YYYY",
        "MMMM DD, YYYY",
        "DD MMMM, YYYY",
        "YYYY-MM-DD HH:mm:ss",
        "DD/MM/YYYY HH:mm:ss",
        "MM/DD/YYYY HH:mm:ss",
        "YYYY-MM-DDTHH:mm:ssZ",
        "dddd, MMMM DD, YYYY",
    ], exampleFile = [
        [
            "first_column",
            "second_column",
            "third_column",
            "fourth_column",
            "fifth_column",
        ],
        [
            (0, dayjs_1.default)().format("DD-MM-YYYY"),
            (0, dayjs_1.default)().format("DD-MM-YYYY"),
            120,
            undefined,
            "text",
        ],
        [
            (0, dayjs_1.default)().format("DD-MM-YYYY"),
            (0, dayjs_1.default)().format("DD-MM-YYYY"),
            undefined,
            500,
            "text",
        ],
        [
            (0, dayjs_1.default)().format("DD-MM-YYYY"),
            (0, dayjs_1.default)().format("DD-MM-YYYY"),
            790,
            undefined,
            "text",
        ],
    ] } = _a, other = __rest(_a, ["open", "existDate", "existAmount", "existOrderFields", "firstAmountColumn", "secondAmountColumn", "onClose", "onSubmit", "fieldsToBeOrder", "delimiters", "qualifiers", "datesFormats", "exampleFile"]);
    const [files, setFiles] = (0, react_1.useState)([]);
    const AMOUNT_FIELDS_FORMAT = [
        {
            label: `Two Columns (${firstAmountColumn}/${secondAmountColumn})`,
            value: "true",
        },
        {
            label: "Single Column (+/-)",
            value: "false",
        },
    ];
    const uploadEntriesSchema = Yup.object().shape({
        file: Yup.mixed().required("File is required"),
        delimiterType: Yup.string().required("Delimiter is required"),
        delimiter: Yup.string().when("delimiterType", ([delimiterType]) => delimiterType === "OTHER"
            ? Yup.string().required("Other delimiter is required")
            : Yup.string()),
        qualifierType: Yup.string().required("Qualifier is required"),
        qualifier: Yup.string().when("qualifierType", ([qualifierType]) => qualifierType === "OTHER"
            ? Yup.string()
                .required("Other delimiter is required")
                .notOneOf([Yup.ref("delimiter")], "Delimiter and qualifier must be different")
            : Yup.string()),
        dateFormat: Yup.string().when(() => existDate
            ? Yup.string().required("Date format is required")
            : Yup.string()),
        withHeader: Yup.boolean().required("With header is required"),
        creditDebitOneColumn: Yup.string().when(() => existAmount
            ? Yup.string().required(`${firstAmountColumn}/${secondAmountColumn} columns format is required`)
            : Yup.string()),
        columnsOrder: Yup.array()
            .of(Yup.string())
            .when(() => existOrderFields
            ? Yup.array().of(Yup.string()).required("Columns order is required")
            : Yup.array().of(Yup.string())),
    });
    const defaultValues = (0, react_1.useMemo)(() => ({
        file: "",
        delimiterType: "",
        delimiter: "",
        qualifierType: "",
        qualifier: "",
        dateFormat: "",
        withHeader: true,
        creditDebitOneColumn: "true",
        columnsOrder: fieldsToBeOrder,
    }), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const methods = (0, react_hook_form_1.useForm)({
        resolver: (0, yup_1.yupResolver)(uploadEntriesSchema),
        defaultValues,
    });
    const { reset, handleSubmit, watch, setValue, formState: { isSubmitting, errors }, } = methods;
    const values = watch();
    (0, react_1.useEffect)(() => {
        if (!open) {
            setFiles([]);
            reset();
        }
    }, [open, reset]);
    (0, react_1.useEffect)(() => {
        var _a;
        const isCreditDebitOneColumn = ((_a = values === null || values === void 0 ? void 0 : values.creditDebitOneColumn) === null || _a === void 0 ? void 0 : _a.toString()) === "true";
        let addedFields = [];
        if (existAmount) {
            addedFields = isCreditDebitOneColumn
                ? [`${firstAmountColumn}`, `${secondAmountColumn}`]
                : [`${firstAmountColumn}/${secondAmountColumn}`];
        }
        const selectedFieldsOrder = [...fieldsToBeOrder, ...addedFields];
        setValue("columnsOrder", selectedFieldsOrder);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values.creditDebitOneColumn]);
    (0, react_1.useEffect)(() => {
        if (values.delimiterType && values.delimiterType !== "OTHER") {
            setValue("delimiter", values.delimiterType);
        }
        else
            setValue("delimiter", "");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values.delimiterType, setValue]);
    (0, react_1.useEffect)(() => {
        if (values.qualifierType && values.qualifierType !== "OTHER") {
            setValue("qualifier", values.qualifierType);
        }
        else
            setValue("qualifier", "");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values.qualifierType, setValue]);
    const handleDropSingleFile = (0, react_1.useCallback)((acceptedFiles) => {
        const newFile = acceptedFiles[0];
        if (newFile) {
            if (newFile) {
                setFiles([
                    Object.assign(newFile, {
                        preview: URL.createObjectURL(newFile),
                    }),
                ]);
            }
            setValue("file", Object.assign(newFile, {
                preview: URL.createObjectURL(newFile),
            }));
        }
    }, [setValue]);
    const handleClose = () => {
        onClose();
        reset();
    };
    const handleImport = (data) => __awaiter(this, void 0, void 0, function* () {
        const customizedData = Object.assign(Object.assign({}, data), { creditDebitOneColumn: Boolean(data.creditDebitOneColumn) });
        delete customizedData.delimiterType;
        delete customizedData.qualifierType;
        if (!existDate)
            delete customizedData.dateFormat;
        if (!existAmount)
            delete customizedData.creditDebitOneColumn;
        if (!existOrderFields)
            delete customizedData.columnsOrder;
        onSubmit(customizedData);
    });
    const handleRemoveFile = (inputFile) => {
        const filtered = files.filter((file) => file !== inputFile);
        setFiles(filtered);
        setValue("file", filtered[0]);
    };
    return (React.createElement(customized_dialogs_1.DialogWithCloseButton, Object.assign({ fullWidth: true, maxWidth: "sm", open: open, onClose: handleClose }, other),
        React.createElement(FormProvider_1.default, { methods: methods, onSubmit: handleSubmit(handleImport) },
            React.createElement(material_1.DialogTitle, { sx: { p: (theme) => theme.spacing(3, 3, 2, 3) } }, "Import CSV"),
            React.createElement(material_1.DialogContent, { dividers: true, sx: { pt: 1, pb: 0, border: "none" } },
                React.createElement(material_1.Box, { gap: 2, display: "grid", gridTemplateColumns: { xs: "repeat(1, 1fr)" } },
                    React.createElement(upload_1.Upload, { accept: { "file/csv": [".csv"] }, multiple: true, onDrop: handleDropSingleFile, files: files, onRemove: handleRemoveFile, hideInput: files.length !== 0 }),
                    React.createElement(material_1.Divider, null),
                    (values === null || values === void 0 ? void 0 : values.file) && (React.createElement(React.Fragment, null,
                        React.createElement(material_1.Box, { gap: 2, display: "grid", gridTemplateColumns: {
                                xs: values.delimiterType === "OTHER"
                                    ? "repeat(2, 1fr)"
                                    : "repeat(1, 1fr)",
                            } },
                            React.createElement(hook_form_1.RHFSelect, { name: "delimiterType", label: "Delimiter *", placeholder: "Delimiter" },
                                React.createElement(material_1.MenuItem, { value: "", sx: { fontStyle: "italic", color: "text.secondary" } }, "None"),
                                React.createElement(material_1.Divider, null), (_b = [...delimiters, { label: "Other", value: "OTHER" }]) === null || _b === void 0 ? void 0 :
                                _b.map((delimiter, index) => (React.createElement(material_1.MenuItem, { key: index, value: delimiter.value, sx: {
                                        pl: 3,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        whiteSpace: "nowrap",
                                    } },
                                    React.createElement("span", null, `${delimiter === null || delimiter === void 0 ? void 0 : delimiter.label} `),
                                    (delimiter === null || delimiter === void 0 ? void 0 : delimiter.value) !== "OTHER" && (React.createElement("span", null,
                                        "( ", delimiter === null || delimiter === void 0 ? void 0 :
                                        delimiter.value,
                                        " )")))))),
                            values.delimiterType === "OTHER" && (React.createElement(hook_form_1.RHFTextField, { name: "delimiter", label: "Other *" }))),
                        React.createElement(material_1.Box, { gap: 2, display: "grid", gridTemplateColumns: {
                                xs: values.qualifierType === "OTHER"
                                    ? "repeat(2, 1fr)"
                                    : "repeat(1, 1fr)",
                            } },
                            React.createElement(hook_form_1.RHFSelect, { name: "qualifierType", label: `Qualifier *`, placeholder: "Qualifier" },
                                React.createElement(material_1.MenuItem, { value: "", sx: { fontStyle: "italic", color: "text.secondary" } }, "None"),
                                React.createElement(material_1.Divider, null), (_c = [...qualifiers, { label: "Other", value: "OTHER" }]) === null || _c === void 0 ? void 0 :
                                _c.map((qualifier, index) => (React.createElement(material_1.MenuItem, { key: index, value: qualifier.value, sx: {
                                        pl: 3,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        whiteSpace: "nowrap",
                                    } },
                                    React.createElement("span", null, `${qualifier === null || qualifier === void 0 ? void 0 : qualifier.label} `),
                                    (qualifier === null || qualifier === void 0 ? void 0 : qualifier.value) !== "OTHER" && (React.createElement("span", null,
                                        " ", qualifier === null || qualifier === void 0 ? void 0 :
                                        qualifier.value,
                                        " ")))))),
                            values.qualifierType === "OTHER" && (React.createElement(hook_form_1.RHFTextField, { name: "qualifier", label: `Other *` }))),
                        existDate && (React.createElement(hook_form_1.RHFSelect, { name: "dateFormat", label: "Date Format *", placeholder: "Date Format" },
                            React.createElement(material_1.MenuItem, { value: "", sx: { fontStyle: "italic", color: "text.secondary" } }, "None"),
                            React.createElement(material_1.Divider, null), datesFormats === null || datesFormats === void 0 ? void 0 :
                            datesFormats.map((dateFormat, index) => (React.createElement(material_1.MenuItem, { key: index, value: dateFormat }, dateFormat))))),
                        existAmount && (React.createElement(hook_form_1.RHFRadioGroup, { row: true, name: "creditDebitOneColumn", options: AMOUNT_FIELDS_FORMAT, label: "Credit/Debit Columns Format *" })),
                        existOrderFields && (React.createElement(hook_form_1.RHFOrderItems, { fields: (_d = values === null || values === void 0 ? void 0 : values.columnsOrder) !== null && _d !== void 0 ? _d : [], name: "columnsOrder", label: "Fields Order *" })),
                        React.createElement(hook_form_1.RHFCheckbox, { name: "withHeader", label: "File With Header *" }))))),
            React.createElement(material_1.DialogActions, null,
                React.createElement(material_1.Stack, { direction: "row", gap: { xs: 1 } },
                    React.createElement(material_1.Button, { variant: "outlined", startIcon: React.createElement(iconify_1.default, { icon: "eva:download-fill" }), onClick: () => (0, exportDataInCSVFile_1.downloadExcelFile)(exampleFile) }, "Download an example"),
                    React.createElement(lab_1.LoadingButton, { type: "submit", startIcon: React.createElement(iconify_1.default, { icon: "eva:cloud-upload-fill" }), variant: "contained", disabled: (files === null || files === void 0 ? void 0 : files.length) === 0, loading: isSubmitting }, "Import"))))));
}
exports.default = ImportCsvDialog;
