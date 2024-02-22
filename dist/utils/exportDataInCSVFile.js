"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadExcelFile = exports.DataAsCSVFile = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
function DataAsCSVFile(data) {
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement("a");
    link.href = url;
    const fileName = `downloaded Report ${(0, dayjs_1.default)(new Date()).format("DD MMM YY")}.csv`;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
exports.DataAsCSVFile = DataAsCSVFile;
const downloadExcelFile = (data) => {
    const csvContent = data.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "example.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
exports.downloadExcelFile = downloadExcelFile;
