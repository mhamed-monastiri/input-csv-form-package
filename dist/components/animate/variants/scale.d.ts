import { VariantsType } from '../types';
export declare const varScale: (props?: VariantsType) => {
    inX: {
        initial: {
            scaleX: number;
            opacity: number;
        };
        animate: {
            scaleX: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            scaleX: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    inY: {
        initial: {
            scaleY: number;
            opacity: number;
        };
        animate: {
            scaleY: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            scaleY: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    outX: {
        initial: {
            scaleX: number;
            opacity: number;
        };
        animate: {
            scaleX: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    outY: {
        initial: {
            scaleY: number;
            opacity: number;
        };
        animate: {
            scaleY: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
};
