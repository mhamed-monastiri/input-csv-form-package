import * as React from "react";
import { ImageProps } from "./types";
declare const Image: React.ForwardRefExoticComponent<Omit<ImageProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export default Image;
