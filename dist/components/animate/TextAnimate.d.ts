import { BoxProps } from "@mui/material";
import { MotionProps } from "framer-motion";
import * as React from "react";
type Props = BoxProps & MotionProps;
interface TextAnimateProps extends Props {
    text: string;
}
export default function TextAnimate({ text, variants, sx, ...other }: TextAnimateProps): React.JSX.Element;
export {};
