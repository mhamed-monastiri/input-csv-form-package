import { ExtendFile } from "./types";

// ----------------------------------------------------------------------

// Define more types here
const FORMAT_EXCEL = ["xls", "xlsx", "numbers", "csv"];

// ----------------------------------------------------------------------

export function fileFormat(fileUrl: string | undefined) {
  let format;

  switch (fileUrl?.includes(fileTypeByUrl(fileUrl))) {
    case FORMAT_EXCEL.includes(fileTypeByUrl(fileUrl)):
      format = "excel";
      break;
    default:
      format = fileTypeByUrl(fileUrl);
  }

  return format;
}

// ----------------------------------------------------------------------

export function fileTypeByUrl(fileUrl = "") {
  return (fileUrl && fileUrl.split(".").pop()) || "";
}

// ----------------------------------------------------------------------

export function fileNameByUrl(fileUrl: string) {
  return fileUrl.split("/").pop();
}

// ----------------------------------------------------------------------

export function fileData(file: ExtendFile | string) {
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
