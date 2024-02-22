import { VariantsType } from '../types';
export declare const varFlip: (props?: VariantsType) => {
    inX: {
        initial: {
            rotateX: number;
            opacity: number;
        };
        animate: {
            rotateX: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            rotateX: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    inY: {
        initial: {
            rotateY: number;
            opacity: number;
        };
        animate: {
            rotateY: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            rotateY: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    outX: {
        initial: {
            rotateX: number;
            opacity: number;
        };
        animate: {
            rotateX: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    outY: {
        initial: {
            rotateY: number;
            opacity: number;
        };
        animate: {
            rotateY: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
};
