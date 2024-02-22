import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import * as React from "react";
type FileIconProps = {
    file: File | string;
    tooltip?: boolean;
    imageView?: boolean;
    onDownload?: VoidFunction;
    sx?: SxProps<Theme>;
    imgSx?: SxProps<Theme>;
};
export default function FileThumbnail({ file, tooltip, imageView, onDownload, sx, imgSx, }: FileIconProps): React.JSX.Element;
export {};
