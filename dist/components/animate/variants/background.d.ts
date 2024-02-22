import { BackgroundType } from '../types';
export declare const varBgColor: (props?: BackgroundType) => {
    animate: {
        background: string[];
        transition: {
            duration: number;
            ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
        };
    };
};
export declare const varBgKenburns: (props?: BackgroundType) => {
    top: {
        animate: {
            scale: number[];
            y: number[];
            transformOrigin: string[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    right: {
        animate: {
            scale: number[];
            x: number[];
            y: number[];
            transformOrigin: string[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    bottom: {
        animate: {
            scale: number[];
            y: number[];
            transformOrigin: string[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    left: {
        animate: {
            scale: number[];
            x: number[];
            y: number[];
            transformOrigin: string[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
};
export declare const varBgPan: (props?: BackgroundType) => {
    top: {
        animate: {
            backgroundImage: string[];
            backgroundPosition: string[];
            backgroundSize: string[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    right: {
        animate: {
            backgroundPosition: string[];
            backgroundImage: string[];
            backgroundSize: string[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    bottom: {
        animate: {
            backgroundImage: string[];
            backgroundPosition: string[];
            backgroundSize: string[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
    left: {
        animate: {
            backgroundPosition: string[];
            backgroundImage: string[];
            backgroundSize: string[];
            transition: {
                duration: number;
                ease: "linear" | number[] | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate";
            };
        };
    };
};
