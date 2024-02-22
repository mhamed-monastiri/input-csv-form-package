import { FabProps, SxProps } from "@mui/material";
import * as React from "react";
export interface FabButtonAnimateProps extends FabProps {
    sxWrap?: SxProps;
}
declare const FabButtonAnimate: React.ForwardRefExoticComponent<Omit<FabButtonAnimateProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default FabButtonAnimate;
