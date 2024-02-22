"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileData = exports.fileNameByUrl = exports.fileTypeByUrl = exports.fileFormat = void 0;
// ----------------------------------------------------------------------
// Define more types here
const FORMAT_EXCEL = ["xls", "xlsx", "numbers", "csv"];
// ----------------------------------------------------------------------
function fileFormat(fileUrl) {
    let format;
    switch (fileUrl === null || fileUrl === void 0 ? void 0 : fileUrl.includes(fileTypeByUrl(fileUrl))) {
        case FORMAT_EXCEL.includes(fileTypeByUrl(fileUrl)):
            format = "excel";
            break;
        default:
            format = fileTypeByUrl(fileUrl);
    }
    return format;
}
exports.fileFormat = fileFormat;
// ----------------------------------------------------------------------
function fileTypeByUrl(fileUrl = "") {
    return (fileUrl && fileUrl.split(".").pop()) || "";
}
exports.fileTypeByUrl = fileTypeByUrl;
// ----------------------------------------------------------------------
function fileNameByUrl(fileUrl) {
    return fileUrl.split("/").pop();
}
exports.fileNameByUrl = fileNameByUrl;
// ----------------------------------------------------------------------
function fileData(file) {
    // Url
    if (typeof file === "string") {
        return {
            key: file,
            preview: file,
            name: fileNameByUrl(file),
            type: fileTypeByUrl(file),
        };
    }
    // File
    return {
        key: file.preview,
        name: file.name,
        size: file.size,
        path: file.path,
        type: file.type,
        preview: file.preview,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
    };
}
exports.fileData = fileData;
