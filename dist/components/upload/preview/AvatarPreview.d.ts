import * as React from "react";
import { CustomFile } from "../types";
type Props = {
    file: CustomFile | string | null;
};
export default function AvatarPreview({ file }: Props): React.JSX.Element | null;
export {};
