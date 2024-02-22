import * as React from "react";
import { UploadProps } from "../upload";
interface Props extends Omit<UploadProps, "file"> {
    name: string;
    label: string;
    multiple?: boolean;
}
export declare function RHFUploadAvatar({ name, helperText, ...other }: Props): React.JSX.Element;
export declare function RHFUploadBox({ name, ...other }: Props): React.JSX.Element;
export declare function RHFUpload({ name, multiple, helperText, files, label, ...other }: Props): React.JSX.Element;
export {};
