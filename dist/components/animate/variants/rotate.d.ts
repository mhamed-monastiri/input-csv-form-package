import { VariantsType } from '../types';
export declare const varRotate: (props?: VariantsType) => {
    in: {
        initial: {
            opacity: number;
            rotate: number;
        };
        animate: {
            opacity: number;
            rotate: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            opacity: number;
            rotate: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    out: {
        initial: {
            opacity: number;
            rotate: number;
        };
        animate: {
            opacity: number;
            rotate: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
};
