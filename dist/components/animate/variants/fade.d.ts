import { VariantsType } from "../types";
export declare const varFade: (props?: VariantsType) => {
    in: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
            transition: (props?: import("../types").TranEnterType | undefined) => {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            opacity: number;
            transition: (props?: import("../types").TranExitType | undefined) => {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    inUp: {
        initial: {
            y: number;
            opacity: number;
        };
        animate: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    inDown: {
        initial: {
            y: number;
            opacity: number;
        };
        animate: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    inLeft: {
        initial: {
            x: number;
            opacity: number;
        };
        animate: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    inRight: {
        initial: {
            x: number;
            opacity: number;
        };
        animate: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    out: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    outUp: {
        initial: {
            y: number;
            opacity: number;
        };
        animate: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    outDown: {
        initial: {
            y: number;
            opacity: number;
        };
        animate: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    outLeft: {
        initial: {
            x: number;
            opacity: number;
        };
        animate: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    outRight: {
        initial: {
            x: number;
            opacity: number;
        };
        animate: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
        exit: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
};
